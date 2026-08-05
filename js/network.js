/*
 * Dakota's Basement
 * Network Module
 */

window.Network = {
    initialized: false,

    queue: [],
    fetching: 0,

    init() {
        if (this.initialized) return;

        this.initialized = true;

        console.log("[Network] Module initialized.");
    },

    async fetch(url, options = {}, priority = 2) {
        return queueFetch(url, options, priority);
    },

    async run() {
        return runQueue();
    },

    async request(url, options = {}) {
        return doFetch(url, options);
    }
};

Network.init();
