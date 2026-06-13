let apiCall = new Promise(
    function (resolve, reject) {
        resolve("we are done now -- resolved");
    }
);

apiCall.then(function (data) {
    console.log(data);
}).catch(function (data) {
    console.log(data);
});




let apiCall2 = new Promise(
    function (resolve, reject) {
        reject('500 Error');
    }
);

apiCall2.then(function (data) {
    console.log("success or resolve");
}).catch(function (data) {
    console.log(data);
});

