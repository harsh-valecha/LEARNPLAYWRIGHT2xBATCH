// why people dont prefer callback

function openBrowser(callback) {
    console.log("Step 1: Opening a browser");
    setTimeout(function () {
        callback();
    }, 1000);
}

function goToLoginPage(callback) {
    console.log("Step 2 : Login");
    setTimeout(function () {
        callback();
    }, 500);
}

function enterCredential(callback) {
    console.log("Step 3 : Entering credentials");
    setTimeout(function () {
        callback();
    }, 1000);
}

function clickLogin(callback) {
    console.log("Step 4: Login done ");
    setTimeout(function () {
        callback();
    }, 1000);
}

openBrowser(function () {
    goToLoginPage(function () {
        enterCredential(function () {
            clickLogin(function () {
                console.log("Finally i am done");
            })
        })
    })
})