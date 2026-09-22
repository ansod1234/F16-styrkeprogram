// Minimal service worker — required by Chrome/Android for real installability.
// No offline caching logic; it just needs to exist and control fetches.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('Offline', {status: 503})));
});
