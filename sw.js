/**
 * Dakota's Basement
 * Scramjet Migration
 * Commit 1
 */

self.addEventListener("install", (event) => {
    console.log("[SW] Installing...");
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("[SW] Activated");

    event.waitUntil((async () => {
        await self.clients.claim();
    })());
});

self.addEventListener("fetch", (event) => {
    // Intentionally empty.
    // Scramjet interception will be added
    // in Commit 2.
});
