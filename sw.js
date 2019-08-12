const CACHE = 'cache-only-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll([
                'index.html',
                'https://yastatic.net/jquery/3.3.1/jquery.min.js',
                '/dist/css/main.css',
                '/dist/js/main.js',
                'favicon-16x16.png',
                'favicon-32x32.png',
                'manifest.json',
                '/assets/icons/android-chrome-192x192.png',
                '/assets/icons/android-chrome-512x512.png '
            ]);
        })
    );
});



// при событии fetch, мы используем кэш, и только потом обновляем его данным с сервера
self.addEventListener('fetch', function(event) {
    // Мы используем `respondWith()`, чтобы мгновенно ответить без ожидания ответа с сервера.
    event.respondWith(fromCache(event.request));
    // `waitUntil()` нужен, чтобы предотвратить прекращение работы worker'a до того как кэш обновиться.
    event.waitUntil(update(event.request));
});

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}

function update(request) {
    return caches.open(CACHE).then((cache) =>
        fetch(request).then((response) =>
            cache.put(request, response)
        )
    );
}