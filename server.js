"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "127.0.0.1";
const port = Number(process.env.PORT || 4173);
const root = __dirname;
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const server = http.createServer((request, response) => {
  const requestPath = request.url === "/" ? "/index.html" : String(request.url || "").split("?")[0];
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(requestPath);
  } catch (_error) {
    response.writeHead(400).end("Bad request");
    return;
  }

  const filePath = path.resolve(root, `.${decodedPath}`);
  if (!filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      });
      response.end(error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    });
    response.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`Shelly’s RTE Command Centre: http://${host}:${port}`);
  console.log("Press Ctrl+C to stop the local-only server.");
});
