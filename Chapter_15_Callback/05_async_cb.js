console.log("Test 1 : started");

setTimeout(function () {
    console.log("Test 2 : Api response");
}, 2000);

console.log("Test 3: moving to next test");

// why did test 3 print first

// because of setTimeout is async it says run this after 2 seconds
