// Dakota's Basement — Scramjet v2 service worker

if (navigator.userAgent.includes("Firefox")) {
    try {
        Object.defineProperty(globalThis, "crossOriginIsolated", {
            value: true,
            writable: false,
        });
    } catch {}
}

// Scramjet's service-worker bundle.
// This file must exist at /scramjet/scramjet.all.js.
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
    event.waitUntil(self.clients.claim());
});
