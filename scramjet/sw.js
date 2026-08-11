// sw.js
//
// Scramjet v2 service worker.
//
// Make sure the Scramjet runtime files referenced below actually exist at
// these paths on your server.

if (navigator.userAgent.includes("Firefox")) {
    try {
        Object.defineProperty(globalThis, "crossOriginIsolated", {
            value: true,
            writable: false,
        });
    } catch {}
}

// Load the Scramjet v2 worker runtime.
importScripts("/scramjet/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();

const scramjet = new ScramjetServiceWorker();

async function handleRequest(event) {
    await scramjet.loadConfig();

    if (scramjet.route(event)) {
        return scramjet.fetch(event);
    }

    return fetch(event.request);
}

self.addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event));
});

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            await self.clients.claim();
        })()
    );
});
