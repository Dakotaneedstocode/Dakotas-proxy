/// <reference path="../lib/index.d.ts" />

// Scramjet v2 service worker.
// The runtime and WASM files must be available under /scram/.
//
// Required files:
//   /scram/scramjet.all.js
//   /scram/scramjet.sync.js
//   /scram/scramjet.wasm.wasm
//
// The transport itself is configured from the parent page through BareMux.

if (navigator.userAgent.includes("Firefox")) {
    try {
        Object.defineProperty(globalThis, "crossOriginIsolated", {
            value: true,
            writable: false,
        });
    } catch {}
}

importScripts("/scram/scramjet.all.js");

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
