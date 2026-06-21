function questionName(input) {
    // Extract responseTimes from the input (assuming input is the array as per standard platform setups)
    // If input is an object like { responseTimes: [...] }, change to: let responseTimes = input.responseTimes;
    let responseTimes = input;
    const SLA_LIMIT = 500;

    if (!responseTimes || responseTimes.length === 0) {
        return "Total Requests: 0 Min Response: 0ms Max Response: 0ms SLA Breaches: 0 (0.00%) Overall Status: ✅ SLA PASSED";
    }

    let totalRequests = responseTimes.length;
    let minResponse = responseTimes[0];
    let maxResponse = responseTimes[0];
    let sum = 0;
    let breachCount = 0;

    let i = 0;
    while (i < totalRequests) {
        let current = responseTimes[i];

        // Track minimum response time
        if (current < minResponse) {
            minResponse = current;
        }

        // Track maximum response time
        if (current > maxResponse) {
            maxResponse = current;
        }

        // Accumulate sum for average
        sum += current;

        // Check for SLA breach
        if (current > SLA_LIMIT) {
            breachCount++;
        }

        i++;
    }

    // Calculate percentage and format to 2 decimal places
    let breachPercentage = ((breachCount / totalRequests) * 100).toFixed(2);

    // Determine final status
    let status = breachCount > 0 ? "❌ SLA VIOLATED" : "✅ SLA PASSED";

    // Formulate the exact output string
    let answer = `Total Requests: ${totalRequests} Min Response: ${minResponse}ms Max Response: ${maxResponse}ms SLA Breaches: ${breachCount} (${breachPercentage}%) Overall Status: ${status}`;

    return answer;
}


console.log(questionName([120, 230, 450, 510, 180, 620]));