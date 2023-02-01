// Service Worker

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('serviceWorkerCachedSite.js')
            .then(reg => console.log('Service Worker: Registered', reg.scope))
            .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}