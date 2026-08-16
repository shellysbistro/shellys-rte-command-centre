import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function availablePort() {
  const socket = net.createServer();
  await new Promise((resolve, reject) => socket.once("error", reject).listen(0, "127.0.0.1", resolve));
  const port = socket.address().port;
  await new Promise((resolve, reject) => socket.close((error) => error ? reject(error) : resolve()));
  return port;
}

async function waitForHealth(baseUrl, child) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (child.exitCode !== null) throw new Error(`Server exited before health check with code ${child.exitCode}.`);
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      if (response.ok) return response.json();
    } catch (_error) {
      // Server has not started listening yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error("Server did not become healthy in time.");
}

const dataDirectory = await mkdtemp(path.join(os.tmpdir(), "shellys-task-test-"));
const port = await availablePort();
const baseUrl = `http://127.0.0.1:${port}`;
const child = spawn(process.execPath, ["server.js"], {
  cwd: root,
  env: {
    ...process.env,
    PORT: String(port),
    SHELLYS_DATA_DIR: dataDirectory,
    TASK_NOTIFICATIONS_ENABLED: "false",
    TASK_EMAIL_WEBHOOK_URL: "",
  },
  stdio: ["ignore", "pipe", "pipe"],
});

let stderr = "";
child.stderr.on("data", (chunk) => { stderr += chunk.toString(); });

try {
  const health = await waitForHealth(baseUrl, child);
  assert.equal(health.ok, true);
  assert.equal(health.outboundNotificationsEnabled, false);

  const configResponse = await fetch(`${baseUrl}/api/notifications/config`);
  assert.equal(configResponse.status, 200);
  const config = await configResponse.json();
  assert.deepEqual(config.people.map((item) => item.person), ["Cat", "Richard", "Vince"]);
  assert.equal(config.people.find((item) => item.person === "Cat").email, "catherine@aimadvisors.ca");
  assert.equal(config.people.find((item) => item.person === "Richard").email, "richardc@shellysbistro.com");
  assert.equal(config.people.find((item) => item.person === "Vince").email, "vince@shellysbistro.com");
  assert.equal(config.emailDispatcher.active, false);
  assert.ok(config.people.every((item) => item.channels.length === 1 && item.channels[0] === "email"));

  const aliasResponse = await fetch(`${baseUrl}/api/notifications/status`);
  assert.equal(aliasResponse.status, 200);

  const createResponse = await fetch(`${baseUrl}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Verify task notification workflow",
      assignee: "Cat",
      createdBy: "Vince",
      priority: "High",
      dueDate: "2026-08-20",
      details: "Integration-test task",
    }),
  });
  assert.equal(createResponse.status, 201);
  const created = await createResponse.json();
  assert.equal(created.task.assignee, "Cat");
  assert.equal(created.task.createdBy, "Vince");
  assert.equal(created.notification.taskId, created.task.id);
  assert.equal(created.notification.recipient, "Cat");
  assert.equal(created.notification.delivered, 0);
  assert.equal(created.notification.deliveries.find((item) => item.channel === "email").state, "disabled");
  assert.deepEqual(created.notification.deliveries.map((item) => item.channel), ["email"]);
  assert.ok(created.notification.deliveries.every((item) => item.attemptedAt));

  const patchResponse = await fetch(`${baseUrl}/api/tasks/${created.task.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "In progress" }),
  });
  assert.equal(patchResponse.status, 200);
  assert.equal((await patchResponse.json()).task.status, "In progress");

  const invalidResponse = await fetch(`${baseUrl}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Invalid assignment", assignee: "Unknown", createdBy: "Vince" }),
  });
  assert.equal(invalidResponse.status, 400);

  const listResponse = await fetch(`${baseUrl}/api/tasks`);
  const list = await listResponse.json();
  assert.equal(list.tasks.length, 1);
  assert.equal(list.tasks[0].status, "In progress");

  console.log("Task server integration test passed: three-person queue, validation, persistence and safe notification fallback.");
} finally {
  child.kill();
  await new Promise((resolve) => child.once("exit", resolve));
  await rm(dataDirectory, { recursive: true, force: true });
  if (stderr.trim()) process.stderr.write(stderr);
}
