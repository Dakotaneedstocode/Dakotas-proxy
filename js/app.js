/*
 * Dakota's Basement
 * Main Application
 */

window.DakotasBasement = {
    version: "2.0.0-dev",
    backend: "library",
    initialized: false,

    async init() {
        console.log("Dakota's Basement starting...");

        if (window.BasementTabs) {
            BasementTabs.init();
        }

        this.initialized = true;

        console.log("Dakota's Basement initialized.");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    DakotasBasement.init();
});
