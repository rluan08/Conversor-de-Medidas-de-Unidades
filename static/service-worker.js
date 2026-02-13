self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("conversor-cache").then(cache => {
      return cache.addAll([
        "/",
        "/static/css/style.css",
        "/static/js/script.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
