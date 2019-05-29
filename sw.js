 const filesToCache = [
  '/',
  '/images/icon-152.png',
  '/index.html',
  '/js/main.js',
  '/js/jquery.js',
  '/manifest.json'
];
const staticCacheName = 'my-uma-app';
self.addEventListener('install', event => {
  console.log('A instalar os service workers e os cache statics assets');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

 
/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
}); 