const CACHE_NAME = "handybox-v2";

const APP_ASSETS = [
  "./",
  "./bmiCalc.html",
  "./cardBox.html",
  "./dice.html",
  "./guandan.html",
  "./index.html",
  "./lifeCounter.html",
  "./randomPick.html",
  "./russianRoulette.html",
  "./passwordGenerator.html",
  "./pomodoro.html",
  "./qr.html",
  "./scoreBoard.html",
  "./spinWheel.html",
  "./truthOrDare.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_ASSETS);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(function (networkResponse) {
          return networkResponse;
        })
        .catch(function () {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    })
  );
});