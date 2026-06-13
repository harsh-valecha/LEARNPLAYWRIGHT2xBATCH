// Promise.allSettled([
//     Promise.resolve("API 200"),
//     Promise.reject("API 500"),
//     Promise.resolve("API 201")
// ])
//     .then(function (results) {
//         results.forEach(function (r) {
//             let val = r.status === "fulfilled" ? r.value : r.reason;
//             console.log(r.status + " - " + val);
//         })
//     })

// let t1 = Promise.resolve("API 200");
// let t2 = Promise.reject("API 501");
// let t3 = Promise.resolve("API 201");

// Promise.allSettled([t1, t2, t3])
//     .then(function (results) {
//         results.forEach(function (r) {
//             let val = r.status === "fulfilled" ? r.value : r.reason;
//             console.log(r.status, "->", val);
//         })
//     });


Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 501"),
    Promise.resolve("API 200")
]).then(function (results) {
    results.forEach(function (r) {
        console.log(r);
    })
})
/*
Answer - 
{ status: 'fulfilled', value: 'API 200' }
{ status: 'rejected', reason: 'API 501' }
{ status: 'fulfilled', value: 'API 200' }
 */


