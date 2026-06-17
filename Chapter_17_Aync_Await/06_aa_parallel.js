// step 2 depends on step 1 then its a sequential run

async function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(
            function () {
                return resolve(name, "200 OK");
            },
            20
        );
    })
}

async function seq() {
    let [r1, r2, r3] = await Promise.all(
        [apiCall("Auth Service"),
        apiCall("User Account create"),
        apiCall("Support page api access")]
    );

    console.log(r1);
    console.log(r2);
    console.log(r3);
}

seq();

// if any of the promise fails we can also use allSettled