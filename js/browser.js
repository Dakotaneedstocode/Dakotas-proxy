/*
 * Dakota's Basement
 * Browser Core
 */

window.BrowserCore = {
    tabs: [],
    activeTabId: 1,
    nextTabId: 2,

    getActiveTab() {
        return this.tabs.find(tab => tab.id === this.activeTabId);
    },

    setTabs(tabs) {
        this.tabs = tabs;
    },

    setActiveTab(id) {
        this.activeTabId = id;
    },

    allocateTabId() {
        return this.nextTabId++;
    },

    init() {
        console.log("Browser core ready.");
    }
};

BrowserCore.init();
