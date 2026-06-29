class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let api = new APITest();
api.setup();