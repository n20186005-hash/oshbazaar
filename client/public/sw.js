/* Osh Bazaar — minimal offline-first service worker. */
const CACHE = "osh-bazaar-v1";
const APP_SHELL = ["/", "/index.html", "/manifest.webmanifest", "/icon.svg", "/favicon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Never cache the weather API or analytics; always go to network.
  if (url.pathname.startsWith("/api/")) return;

  // App shell + built assets: cache-first, fall back to network.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
            return response;
          })
          .catch(() => caches.match("/index.html"));
      })
    );
    return;
  }

  // Cross-origin (maps, fonts, analytics): network with cache fallback.
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
