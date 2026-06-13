// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });

// p.then(function (answer) {
//     console.log("Answer:" + answer);
// })


// let p = new Promise(function (resolve, reject) {
//     reject("something broke");
// });
// p.catch(function (err) {
//     console.log("Error message: " + err);
// });

// 2 thens 
// let p = Promise.resolve(5);

// p.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result: " + val);
// })



// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//     })


// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");
//     })
//     .then(function () {
//         console.log("This will not run");
//     })
//     .catch(function (err) {
//         console.log("Caught: ", err.message);
//     })


// Promise.reject("Test failed")
//     .then(function (data) {
//         console.log("data:", data);
//     })
//     .catch(function (err) {
//         console.log("Error message:", err);
//     })
//     .finally(function () {
//         console.log("Cleanup done");
//     })


// Promise.resolve("Quick win").then(function (msg) {
//     console.log(msg);
// })
// Promise.reject("Quick Loss").catch(function (msg) {
//     console.log(msg);
// })

// prints all message in array 
// let t1 = Promise.resolve("Login: Pass");
// let t2 = Promise.resolve("Search:Pass");
// let t3 = Promise.resolve("Logout: Pass");

// Promise.all([t1, t2, t3]).then(function (results) {
//     console.log(results);
// })