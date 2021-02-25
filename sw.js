
self.addEventListener("install", function(event){
    console.log("Instalando Service Worker");
    event.waitUntil(
        caches.open("sw-cahche").then(function(cache){
            return cache.add("index.html");
        })
    );
});

self.addEventListener('fetch', function(event){
    console.log("Service Worker Fetch");
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});