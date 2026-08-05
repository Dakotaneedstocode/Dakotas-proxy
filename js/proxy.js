/*
 * Dakota's Basement
 * Proxy Backend
 */

window.ProxyBackend = {
    curl: null,
    ready: false,

    async init() {
        if (this.ready) return this.curl;

        if (typeof libcurl === "undefined") {
            throw new Error("libcurl is not loaded.");
        }

        await libcurl.load_wasm();
        libcurl.set_websocket(WISP);

        this.curl = new libcurl.HTTPSession();
        this.curl.set_connections(
            MAX_CONCURRENT,
            MAX_CONCURRENT,
            MAX_CONCURRENT
        );

        this.ready = true;

        console.log("[Proxy] Backend initialized.");

        return this.curl;
    },

    getSession() {
        return this.curl;
    }
};
