const staticCacheName = "site-static";
const dynamicCache = "site-dynamic";
const assets = [
  "/blog/",
  "/blog/index.html",
  "/blog/fallback.html",
  "/blog/manifest.json",
  "/blog/css/style.css"
];

// install service worker
self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", evt => {
  console.log("service worker has been activated");
  evt.waitUntil(
    caches.keys().then(keys => {
      console.log(keys);
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then(cacheRes => {
        return (
          cacheRes ||
          fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCache).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("/blog/fallback.html");
        }
      })
  );
});
