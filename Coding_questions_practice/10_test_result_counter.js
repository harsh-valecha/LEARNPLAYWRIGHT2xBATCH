function questionName(input) {
    // Initialize counters to 0 before the loop
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    const totalTests = input.length;

    // Use a for loop to iterate through the results
    for (let i = 0; i < totalTests; i++) {
        if (input[i] === "pass") {
            passed++;
        } else if (input[i] === "fail") {
            failed++;
        } else if (input[i] === "skip") {
            skipped++;
        }
    }

    // Calculate pass rate as a percentage (handle edge case where totalTests is 0)
    const passRate = totalTests > 0 ? ((passed / totalTests) * 100).toFixed(2) : "0.00";

    // Determine the verdict based on failure counts
    let verdict = "";
    if (failed === 0) {
        verdict = "All tests passed. Ready for release.";
    } else if (failed <= 2) {
        verdict = "Minor failures. Review before release.";
    } else {
        verdict = "Critical failures. Block release.";
    }

    // Build the expected output format string
    // Matches example format: Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.
    const answer = `Total Tests : ${totalTests} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Pass Rate: ${passRate}% VERDICT: ${verdict}`;

    return answer;
}

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
console.log(questionName(testResults));