interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid creds",
    status: "Pass",
    duration: 1500
}

console.log("TC - " + test1.id + " name: " + test1.name + " Status:" + test1.name + " duration:" + test1.duration);