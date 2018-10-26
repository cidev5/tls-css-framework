self.addEventListener('install', function (event) {
    'use strict';
    event.waitUntil(
        caches.open('myMesh').then(function (cache) {
            return cache.addAll([
                '../../examples/millennial_bank/#snapshot',
                '../../examples/millennial_bank/index.html',
                '../../dist/css/millennial-bank.min.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    'use strict';
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});