function questionName(input) {
    let attemptNumber = 0;

    // Use input if it's a valid number, otherwise default to 5
    const MAX_ATTEMPTS = (input && typeof input === 'number') ? input : 5;

    let isSuccess = false;
    let resultLog = "";

    do {
        attemptNumber++;

        // Simulate 40% chance of success (randomValue > 0.6)
        let randomValue = Math.random();
        if (randomValue > 0.6) {
            isSuccess = true;
            resultLog += `Attempt ${attemptNumber}: ✅ SUCCESS (Response 200 OK) `;
        } else {
            resultLog += `Attempt ${attemptNumber}: ❌ FAILED (Timeout/Error) `;
        }

    } while (!isSuccess && attemptNumber < MAX_ATTEMPTS);

    // Append the final result summary exactly as requested
    if (isSuccess) {
        resultLog += `API call PASSED after ${attemptNumber} attempt(s).`;
    } else {
        resultLog += `API call FAILED after ${attemptNumber} attempt(s).`;
    }

    return resultLog;
}

console.log(questionName(5));