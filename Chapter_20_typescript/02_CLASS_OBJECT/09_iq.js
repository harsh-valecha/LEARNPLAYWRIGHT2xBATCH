class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("startting the browser");
    }
    closeBrowser() {
        console.log("closing the browser");
    }
}

let chrome = new Browser("chrome");
let firefox = new Browser("firefox");
console.log(chrome.isOpen);