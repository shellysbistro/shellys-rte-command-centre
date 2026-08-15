"use strict";

self.addEventListener("push", (event) => {
  let message = {};
  try {
    message = event.data?.json() || {};
  } catch (_error) {
    message = { title: "New Shelly’s task", body: event.data?.text() || "Open the task centre for details." };
  }

  event.waitUntil(self.registration.showNotification(message.title || "New Shelly’s task", {
    body: message.body || "Open the task centre for details.",
    icon: "/assets/shellys-bistro-logo.png",
    badge: "/assets/shellys-bistro-logo.png",
    tag: message.taskId ? `task-${message.taskId}` : "shellys-task",
    renotify: true,
    data: { url: message.url || "/?view=tasks" },
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = new URL(event.notification.data?.url || "/?view=tasks", self.location.origin).href;
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of windows) {
      if (new URL(client.url).origin === self.location.origin) {
        await client.navigate(targetUrl);
        return client.focus();
      }
    }
    return self.clients.openWindow(targetUrl);
  })());
});
