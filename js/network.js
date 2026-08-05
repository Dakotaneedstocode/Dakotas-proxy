/*
 * Dakota's Basement
 * Network Module
 *
 * This module will own:
 *  - queueFetch()
 *  - runQueue()
 *  - doFetch()
 *
 * During the refactor, the implementations will be
 * moved from index.html into this file.
 */

window.Network = {
    initialized: false,

    init() {
        if (this.initialized) return;
        this.initialized = true;

        console.log("[Network] Module initialized.");
    }
};

Network.init();
