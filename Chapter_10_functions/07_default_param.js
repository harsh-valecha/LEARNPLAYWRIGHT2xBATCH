function retry(testName, maxRetries = 5, delay = 200) {
    console.log(`Retrying ${testName} upto ${maxRetries} at delay of ${delay}`);
}

retry("Login Test");
retry("Registration Test", 88, 20);