class BaseTest {
    setup(): void {
        console.log("Open Browser");
    }
    teardown(): void {
        console.log("Close browser");
    }
}

class LoginTest extends BaseTest {
    override setup(): void {
        console.log("LoginTest: Open Browser");
        console.log("LoginTest: Maximize");
    }
}


class APITest extends BaseTest {
    override setup(): void {
        console.log("APITest No Browser");
    }
}

let l1 = new LoginTest();
l1.setup(); // whose object is there that method call