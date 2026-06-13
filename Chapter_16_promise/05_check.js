let checkAuth = Promise.resolve("Auth ok");
let checkDb = Promise.resolve("DB ok");
let checkCache = Promise.resolve("cache ok");

Promise.all([checkAuth, checkDb, checkCache]).then(function (results) {
    console.log("All the checks are fine");
});


Promise.all([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function (results) {
    console.log("All tests passed" + results);
}).catch(function (msg) {
    console.log("Rejection:" + msg);
})