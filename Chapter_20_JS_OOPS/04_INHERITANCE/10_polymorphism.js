// method_overriding

class BaseTest {
    setup() {
        console.log("Base Test");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("API Test");
    }
}

let a1 = new APITest();
a1.setup();