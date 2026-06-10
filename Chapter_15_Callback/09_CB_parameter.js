function greetTester(name, callback) {
    console.log("Welcome " + name);
    callback();
}

greetTester("Dumni", function () {
    console.log("Start testing");
})


// callbacj with parameter
function runTest(testName, callback) {
    let status = "Pass";
    callback(testName, status);
}

runTest("Login Test", function (testName, status) {
    console.log(testName + " has Result ->" + status);
})
