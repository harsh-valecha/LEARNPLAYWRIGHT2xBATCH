function test(testName, callback) {
    console.log(testName);
    callback();
}

test("Verify if login page is working", () => {
    console.log("Something is being done");
});


/*
Callback types -
1. synchronous
2. asynchronous

*/