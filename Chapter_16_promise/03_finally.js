

let testRun = new Promise(function (resolve, reject) {
    let apiCall = true;
    if (apiCall) {
        resolve("Assertion Passed");
    }
    else {
        reject("Assertion failed");
    }
})

testRun.then(function (data) {
    console.log(data);
}).catch(function (data) {
    console.log(data);
}).finally(function (data) {
    console.log("I will be executed anyhow");
});