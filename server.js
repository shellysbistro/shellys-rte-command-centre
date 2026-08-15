"use strict";

const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");
const webPush = require("web-push");

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4173);
const root = __dirname;
const dataDirectory = path.resolve(process.env.SHELLYS_DATA_DIR || path.join(root, ".data"));
const taskStorePath = path.join(dataDirectory, "task-centre.json");
const vapidStorePath = path.join(dataDirectory, "push-vapid.json");
const vapidSubject = process.env.VAPID_SUBJECT || "mailto:notifications@shellysbistro.com";
const sseClients = new Set();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

fs.mkdirSync(dataDirectory, { recursive: true });

function loadJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (_error) {
    return fallback;
  }
}

function writeJson(filePath, value) {
  const temporaryPath = `${filePath}.tmp`;
  fs.writeFileSync(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  fs.renameSync(temporaryPath, filePath);
}

function loadSharedState() {
  const stored = loadJson(taskStorePath, null);
  if (!stored || stored.version !== 1 || !Array.isArray(stored.tasks) || !Array.isArray(stored.subscriptions)) {
    return { version: 1, tasks: [], subscriptions: [] };
  }
  return stored;
}

function loadVapidKeys() {
  if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
    return { publicKey: process.env.VAPID_PUBLIC_KEY, privateKey: process.env.VAPID_PRIVATE_KEY };
  }
  const stored = loadJson(vapidStorePath, null);
  if (stored?.publicKey && stored?.privateKey) return stored;
  const generated = webPush.generateVAPIDKeys();
  writeJson(vapidStorePath, generated);
  return generated;
}

let sharedState = loadSharedState();
const vapidKeys = loadVapidKeys();
webPush.setVapidDetails(vapidSubject, vapidKeys.publicKey, vapidKeys.privateKey);

function saveSharedState() {
  writeJson(taskStorePath, sharedState);
}

function securityHeaders(extra = {}) {
  return {
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    ...extra,
  };
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, securityHeaders({ "Content-Type": "application/json; charset=utf-8" }));
  response.end(JSON.stringify(payload));
}

function sendError(response, statusCode, message) {
  sendJson(response, statusCode, { error: message });
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 64 * 1024) {
        const error = new Error("Request body is too large.");
        error.statusCode = 413;
        reject(error);
        request.pause();
      }
    });
    request.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (_error) {
        const error = new Error("Request body must be valid JSON.");
        error.statusCode = 400;
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function cleanText(value, maximumLength) {
  return String(value || "").trim().slice(0, maximumLength);
}

function cleanPerson(value, fallback = "Richard") {
  return ["Cat", "Richard"].includes(value) ? value : fallback;
}

function cleanDate(value) {
  const date = cleanText(value, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "";
}

function publicTask(task) {
  return {
    id: task.id,
    title: task.title,
    details: task.details,
    assignee: task.assignee,
    createdBy: task.createdBy,
    priority: task.priority,
    dueDate: task.dueDate,
    status: task.status,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
}

function broadcast(type, task) {
  const message = `event: ${type}\ndata: ${JSON.stringify(publicTask(task))}\n\n`;
  for (const client of sseClients) client.write(message);
}

async function notifyAssignee(task) {
  const matching = sharedState.subscriptions.filter((item) => item.person === task.assignee);
  let delivered = 0;
  let removed = false;
  const payload = JSON.stringify({
    title: `New task from ${task.createdBy}`,
    body: `${task.title}${task.dueDate ? ` · Due ${task.dueDate}` : ""}`,
    taskId: task.id,
    url: `/?view=tasks&task=${encodeURIComponent(task.id)}`,
  });

  for (const item of matching) {
    try {
      await webPush.sendNotification(item.subscription, payload, { TTL: 60 * 60 * 24 });
      delivered += 1;
    } catch (error) {
      if ([404, 410].includes(error.statusCode)) {
        sharedState.subscriptions = sharedState.subscriptions.filter((candidate) => candidate.id !== item.id);
        removed = true;
      } else {
        console.warn(`Push delivery failed for ${task.assignee}: ${error.message}`);
      }
    }
  }
  if (removed) saveSharedState();
  return { attempted: matching.length, delivered };
}

function handleTaskEvents(request, response) {
  response.writeHead(200, securityHeaders({
    "Content-Type": "text/event-stream; charset=utf-8",
    Connection: "keep-alive",
  }));
  response.write("event: ready\ndata: {}\n\n");
  sseClients.add(response);
  request.on("close", () => sseClients.delete(response));
}

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/health") {
    sendJson(response, 200, { ok: true, taskCount: sharedState.tasks.length, pushEnabled: true });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/tasks") {
    sendJson(response, 200, { tasks: sharedState.tasks.map(publicTask) });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/tasks/events") {
    handleTaskEvents(request, response);
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/tasks") {
    const body = await readJsonBody(request);
    const title = cleanText(body.title, 140);
    if (!title) {
      sendError(response, 400, "Task title is required.");
      return true;
    }
    const now = new Date().toISOString();
    const task = {
      id: crypto.randomUUID(),
      title,
      details: cleanText(body.details, 2000),
      assignee: cleanPerson(body.assignee),
      createdBy: cleanPerson(body.createdBy, "Cat"),
      priority: ["High", "Normal", "Low"].includes(body.priority) ? body.priority : "Normal",
      dueDate: cleanDate(body.dueDate),
      status: "Assigned",
      createdAt: now,
      updatedAt: now,
    };
    sharedState.tasks.unshift(task);
    saveSharedState();
    broadcast("task-created", task);
    const notification = await notifyAssignee(task);
    sendJson(response, 201, { task: publicTask(task), notification });
    return true;
  }

  const taskMatch = url.pathname.match(/^\/api\/tasks\/([0-9a-f-]+)$/i);
  if (request.method === "PATCH" && taskMatch) {
    const body = await readJsonBody(request);
    const task = sharedState.tasks.find((item) => item.id === taskMatch[1]);
    if (!task) {
      sendError(response, 404, "Task not found.");
      return true;
    }
    if (!["Assigned", "In progress", "Completed"].includes(body.status)) {
      sendError(response, 400, "A valid task status is required.");
      return true;
    }
    task.status = body.status;
    task.updatedAt = new Date().toISOString();
    saveSharedState();
    broadcast("task-updated", task);
    sendJson(response, 200, { task: publicTask(task) });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/push/config") {
    sendJson(response, 200, { publicKey: vapidKeys.publicKey });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/push/subscribe") {
    const body = await readJsonBody(request);
    const person = cleanPerson(body.person, "");
    const subscription = body.subscription;
    if (!person || !subscription?.endpoint || !subscription?.keys?.p256dh || !subscription?.keys?.auth) {
      sendError(response, 400, "A person and valid push subscription are required.");
      return true;
    }
    sharedState.subscriptions = sharedState.subscriptions.filter((item) => item.subscription.endpoint !== subscription.endpoint);
    sharedState.subscriptions.push({
      id: crypto.randomUUID(),
      person,
      subscription: {
        endpoint: subscription.endpoint,
        expirationTime: subscription.expirationTime || null,
        keys: { p256dh: subscription.keys.p256dh, auth: subscription.keys.auth },
      },
      createdAt: new Date().toISOString(),
    });
    saveSharedState();
    sendJson(response, 201, { person, subscribed: true });
    return true;
  }

  if (url.pathname.startsWith("/api/")) {
    sendError(response, 404, "API route not found.");
    return true;
  }
  return false;
}

function serveStatic(response, url) {
  const requestPath = url.pathname === "/" ? "/index.html" : url.pathname;
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(requestPath);
  } catch (_error) {
    response.writeHead(400).end("Bad request");
    return;
  }

  if (decodedPath.startsWith("/.data") || decodedPath.startsWith("/.git") || decodedPath.includes("..")) {
    response.writeHead(404, securityHeaders({ "Content-Type": "text/plain; charset=utf-8" })).end("Not found");
    return;
  }

  const filePath = path.resolve(root, `.${decodedPath}`);
  if (!filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500, securityHeaders({ "Content-Type": "text/plain; charset=utf-8" }));
      response.end(error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }
    const extra = { "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream" };
    if (decodedPath === "/service-worker.js") extra["Service-Worker-Allowed"] = "/";
    response.writeHead(200, securityHeaders(extra));
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || `${host}:${port}`}`);
  Promise.resolve(handleApi(request, response, url))
    .then((handled) => {
      if (!handled) serveStatic(response, url);
    })
    .catch((error) => {
      console.error(error);
      if (!response.headersSent) sendError(response, error.statusCode || 500, error.statusCode ? error.message : "Server error.");
      else response.end();
    });
});

const heartbeat = setInterval(() => {
  for (const client of sseClients) client.write(": keep-alive\n\n");
}, 25_000);
heartbeat.unref();

server.listen(port, host, () => {
  console.log(`Shelly’s RTE Command Centre: http://${host}:${port}`);
  console.log("Shared task updates and browser push are enabled.");
  console.log("Press Ctrl+C to stop the server.");
});
