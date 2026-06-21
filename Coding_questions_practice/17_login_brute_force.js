function questionName(input) {
    const targetUser = input.validUsername;
    const targetPass = input.validPassword;
    const MAX_STRIKES = 3;
    const attempts = input.attempts;

    var totalStrikes = 0;
    var isLocked = false;
    let outputLogs = [];
    let i = 0;

    if (attempts && attempts.length > 0) {
        do {
            let currentAttempt = attempts[i];
            let attemptNum = i + 1;

            if (isLocked) {
                outputLogs.push(`Attempt ${attemptNum}: 🔒 ACCOUNT LOCKED - Rejected`);
            } else {
                if (currentAttempt.username === targetUser && currentAttempt.password === targetPass) {
                    outputLogs.push(`Attempt ${attemptNum}: ✅ SUCCESS - Logged In`);
                    break;
                } else {
                    totalStrikes++;
                    outputLogs.push(`Attempt ${attemptNum}: ❌ FAILED - Strike ${totalStrikes}/${MAX_STRIKES}`);

                    if (totalStrikes === MAX_STRIKES) {
                        isLocked = true;
                        outputLogs.push(`🚨 ACCOUNT LOCKED`);
                        // Optional: break; // Uncomment this if you want to stop processing entirely after a lock
                    }
                }
            }

            i++;
        } while (i < attempts.length);
    }

    return outputLogs.join('\n');
}

// FIX: Define proper objects for the attempts array
const wrongAttempt = { username: "admin@testingacademy.com", password: "wrongpassword" };
const correctAttempt = { username: "admin@testingacademy.com", password: "Test@1234" };

console.log(questionName({
    validUsername: "admin@testingacademy.com",
    validPassword: "Test@1234",
    attempts: [wrongAttempt, wrongAttempt, wrongAttempt, correctAttempt]
}));