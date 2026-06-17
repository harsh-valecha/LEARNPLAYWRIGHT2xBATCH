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


async function runE2E() {
    let msg1 = await openBrowser();
    console.log('Step 1:', msg1);
    let msg2 = await goToLogin();
    console.log('Step 2:', msg2);
    let msg3 = await enterCredentials();
    console.log('Step 3:', msg3);

}

runE2E();