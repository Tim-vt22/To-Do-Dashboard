const SW_VERSION = "v3";

self.addEventListener("install", (event) => {
  console.log("Service Worker installiert", SW_VERSION);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker aktiviert", SW_VERSION);
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

