// function as argument 
function runwithLoggin(testFn, testName) {
    console.log(`starting ${testName}`);
    let result = testFn();
    console.log(`Finished : ${testName} - ${result}`);
}

function loginTest() {
    return "Pass";
}

function loginTestFailed() {
    return "Failed";
}

runwithLoggin(loginTest, "Test Login");