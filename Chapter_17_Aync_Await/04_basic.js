async function getTestResults() {
    return "Pass";
} // async function always return some kind of promise

getTestResults().then(function (response) {
    console.log(response);
})