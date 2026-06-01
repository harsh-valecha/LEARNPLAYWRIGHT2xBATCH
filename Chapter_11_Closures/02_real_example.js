function makeRetryCounter(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded the max retries:${max}`;
        }
    }
    console.log(`Retry Attempt :${attempts}/${max}`);
}