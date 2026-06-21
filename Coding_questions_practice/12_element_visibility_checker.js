function questionName(isPresent, isDisplayed, isEnabled) {
    // ADD YOUR CODE HERE
    let status = "";
    let action = "";

    // 1. Determine Status and Action based on the logic rules
    if (!isPresent) {
        status = "NOT FOUND";
        action = "Element is missing from DOM. Check selectors or wait for DOM load.";
    } else if (!isDisplayed) {
        status = "HIDDEN";
        action = "Element is in DOM but hidden. Check CSS properties like display or visibility.";
    } else if (!isEnabled) {
        status = "DISABLED";
        action = "Element is visible but disabled. Wait for enable state or check preconditions.";
    } else {
        status = "READY";
        action = "Element is ready for interaction.";
    }

    // 2. Use ternary operators to determine the Severity level
    let severity = (status === "NOT FOUND") ? "CRITICAL" :
        (status === "HIDDEN" || status === "DISABLED") ? "WARNING" : "OK";

    // 3. Format and return the final output string
    return `Status: ${status} Severity: ${severity} Action: ${action}`;
}

let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

console.log(questionName(isPresent, isDisplayed, isEnabled));