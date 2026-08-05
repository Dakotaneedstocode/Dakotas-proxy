/*
 * Dakota's Basement
 * Main Application
 * Commit 5
 */

window.DakotasBasement = {
    version: "2.0.0-dev",
    backend: "library",
    initialized: false
};

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Dakota's Basement starting...");
    DakotasBasement.initialized = true;

    // Browser initialization will be moved here
    // as we refactor index.html.
});
