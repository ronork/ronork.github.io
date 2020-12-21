importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets"
    })
  );
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: "images",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 10 * 24 * 60 * 60 // 10 Days
        })
      ]
    })
  );
  workbox.routing.registerRoute(/\/$/, new workbox.strategies.CacheFirst());
  workbox.routing.registerRoute(
    /\/blogs\/$/,
    new workbox.strategies.CacheFirst()
  );
  workbox.routing.registerRoute(
    /\/projects\/$/,
    new workbox.strategies.CacheFirst()
  );

  workbox.routing.registerRoute(/\.js$/, new workbox.strategies.CacheFirst());
  workbox.routing.registerRoute(
    /\/api\/postsList$/,
    new workbox.strategies.CacheFirst()
  );

  workbox.routing.registerRoute(
    /\/blogs\/.*\/$/,
    new workbox.strategies.CacheFirst()
  );
  workbox.routing.registerRoute(
    /\/api\/getBlog.*/,
    new workbox.strategies.CacheFirst()
  );
} else {
}
