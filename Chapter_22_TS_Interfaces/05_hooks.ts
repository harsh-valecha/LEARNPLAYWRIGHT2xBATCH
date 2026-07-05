interface testHook {
    (testName: string): void;
}

let beforeHook: testHook = function (testName: string): void {
    console.log("[Before] Setting up" + testName);
}

let afterHook: testHook = function (testName: string): void {
    console.log("[After] Setting up" + testName);
}

interface TestCase {
    id: number,
    name: string,
    status: string,
    duration: number
}

let test1: TestCase = {
    id: 1,
    name: "Test Login",
    status: "Pass",
    duration: 1000
}

beforeHook("LoginTest");
console.log("id: " + test1.id + " name:" + test1.name);
afterHook("LoginTest")