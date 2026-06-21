function questionName(input) {
    // const for fixed values that shouldn't change
    const roles = ['admin', 'editor', 'viewer', 'tester', 'manager'];
    const baseEmail = '@testingacademy.com';

    // var for a global counter/array container as requested
    var testUsers = [];

    // let for loop variables and block-scoped manipulation
    for (let i = 1; i <= input; i++) {
        // Generate unique ID with USR-0001 format padding
        let id = "USR-" + String(i).padStart(4, '0');
        let name = "TestUser_" + i;
        let email = "testuser" + i + baseEmail;

        // Cycle through roles using modulo operator
        let role = roles[(i - 1) % roles.length];

        // Every 3rd user is INACTIVE, others are ACTIVE
        let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

        // Format the user string to match the example output style
        let userString = `${id} | ${name} | ${email} | ${role} | ${status}`;
        testUsers.push(userString);
    }

    // Join the array into a single string if expecting a block text, 
    // or return the array/joined string based on platform expectation.
    // Given the example output, joining with a newline or space matches the structure.
    return testUsers.join('\n');
}

console.log(questionName(8));