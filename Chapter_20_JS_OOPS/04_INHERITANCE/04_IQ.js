class BaseTest {
    setup() {
        console.log("Base:open browser");
    }
    teardown() {
        console.log("Base: Close browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup();
        console.log("UI: maximize window");
    }
    teardown() {
        console.log("UI:take screenshot");
        super.teardown();
    }
}

let ut = new UITest();
ut.setup();
ut.teardown();