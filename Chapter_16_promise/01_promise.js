let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("pizza delivered food is ready");
    }
    else {
        reject("order cancelled");
    }
});

// order.then(function (delivery) {
//     console.log(delivery);
// });

let apiCall = new Promise(function (resolve, reject) {
    reject({ status: 501 })
})

// let apiCall = new Promise(function (resolve, reject) {
//     resolve({ status: 200, body: 'User data' });
// })
apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    // console.log(response.body);
}).catch(function (response) {
    console.log(response);
    console.log(response.status);
});


