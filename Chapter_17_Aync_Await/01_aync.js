// async -- put before function
// await - pause here wait for promise to finish then giving the value calling of function

async function testapi() {
    try {
        let result = await Promise.reject("503 reject")
    }
    catch (error) {
        console.log("error", error);
    }
    finally {
        console.log("Test completed");
    }
}
testapi();