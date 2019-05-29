 const filesToCache = [
  '/',
  '/images/152.png',
  '/index.html',
  '/css/styles.css',
  '/manifest.json'
];
const staticCacheName = 'letmefix-app';
self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

/* Servir páginas de modo offline */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
}); 
console.log("Service Worker Loaded!");