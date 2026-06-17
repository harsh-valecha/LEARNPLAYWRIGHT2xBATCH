function getToken() {
    return Promise.resolve("Token : test123");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();