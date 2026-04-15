const CACHE_NAME = 'atelier-v1';
const ASSETS = [
  './',
  './index.html',
  './products.json',
  './manifest.json'
];

// Installation : on met en cache les fichiers de base
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Stratégie : Réseau d'abord, sinon Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});