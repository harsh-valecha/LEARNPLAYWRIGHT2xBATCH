let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

if (username === "Dev" && password === "secure123") {
    if (isAccountLocked) {
        console.log("Account is locked. Contact support.");
    } else {
        console.log("Login successful! Welcome Dev.");
    }
} else if (username === "Dev" && password !== "secure123") {
    console.log("Wrong password. Try again.");
} else if (username != "Dev") {
    console.log("User not found.");
} else {
    console.log("Login failed.");
}