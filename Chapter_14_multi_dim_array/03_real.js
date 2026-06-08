let testMatrix = [
    ["login", "Pass", 200],
    ["checkout", "fail", 300],
    ["search", "Pass", 600],
];

// for (let row of testMatrix) {
//     for (let cell of row) {
//         console.log(cell);
//     }
// }

// for (let row of testMatrix) {
//     for (let cell of row) {
//         process.stdout.write(cell + " ");
//     }
//     console.log();
// }

// forEach loop
testMatrix.forEach(row => {
    row.forEach(cell => {
        console.log(cell);
    })
})