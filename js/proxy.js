/*
 * Dakota's Basement
 * Proxy Backend
 */

window.ProxyBackend = {
    curl: null,
    ready: false,
    initializing: false,

    async waitForLibcurl(timeout = 10000) {
        const start = Date.now();

        while (typeof libcurl === "undefined") {
            if (Date.now() - start > timeout) {
                throw new Error("Timed out waiting for libcurl.");
            }

            await new Promise(resolve => setTimeout(resolve, 50));
        }
    },

    async init() {
        if (this.ready) return this.curl;

        if (this.initializing) {
            while (!this.ready) {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
            return this.curl;
        }

        this.initializing = true;

        try {
            console.log("[Proxy] Waiting for libcurl...");

            await this.waitForLibcurl();

            console.log("[Proxy] Loading WASM...");

            await libcurl.load_wasm();

            console.log("[Proxy] Configuring websocket...");

            libcurl.set_websocket(WISP);

            console.log("[Proxy] Creating HTTPSession...");

            this.curl = new libcurl.HTTPSession();

            this.curl.set_connections(
                MAX_CONCURRENT,
                MAX_CONCURRENT,
                MAX_CONCURRENT
            );

            this.ready = true;

            console.log("[Proxy] Ready.");

            return this.curl;
        } finally {
            this.initializing = false;
        }
    },

    getSession() {
        return this.curl;
    }
};
