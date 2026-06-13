function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Open the browser");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Go to Login Page");
    })
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Entering Credentials");
    })
}
// converted async to sync
openBrowser().then(function (msg) {
    console.log("Step 1 :" + msg);
    return goToLogin();
}).then(function (msg) {
    console.log("Step 2:" + msg);
    return enterCredentials();
}).then(function (msg) {
    console.log("Step 3:" + msg);
    console.log(msg);
}).catch(function (error) {
    console.log("Error occured:" + error);
}).finally(function () {
    console.log("Login Complete");
})