// kachingga.com used to be the app (kachingga/kachingga, issue #99). Browsers that opened it have its
// service worker registered at /sw.js, and it keeps serving the old app from its cache. This file
// replaces it: on its next update check the browser installs this one, which deletes the old caches,
// unregisters itself and reloads the open tabs, so they show the landing.
// Never register it from the landing (the browser updates the old registration on its own), and keep
// it at /sw.js for as long as some browser may still have the old app (months).
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: 'window' });
      await Promise.all(windows.map((client) => client.navigate(client.url)));
    })(),
  );
});
