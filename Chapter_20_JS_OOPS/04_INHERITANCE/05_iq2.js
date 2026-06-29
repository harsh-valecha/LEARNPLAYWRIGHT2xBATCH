class TestCase {
    execute() {
        console.log("Running generic test");
    }
}

class UnitTest extends TestCase {
    execute() {
        console.log("Running Unit test - checking one function");
    }
}
class APITest extends TestCase {
    execute() {
        console.log("Running API Test - sending HTTP request");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E Test - opening browser");
    }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(
    function (test) {
        test.execute();
    }
)
