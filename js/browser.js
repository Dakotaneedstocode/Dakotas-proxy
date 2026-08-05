/*
 * Dakota's Basement
 * Browser Core
 */

window.BrowserCore = {
    currentTab: null,
    tabs: [],

    init() {
        console.log("Browser core initialized.");
    },

    setCurrentTab(tab) {
        this.currentTab = tab;
    },

    getCurrentTab() {
        return this.currentTab;
    },

    addTab(tab) {
        this.tabs.push(tab);
    },

    removeTab(id) {
        this.tabs = this.tabs.filter(tab => tab.id !== id);
    }
};
