let scores = [
    [85, 90, 78],
    [60, 45, 89],
    [56, 23, 45]
];

// let rowSums = scores.map(
//     row => row.reduce((a, b) => a + b, 0)
// );
// console.log(rowSums);

// printing element by element
// let prints = scores.map(
//     row => row.map(
//         element => console.log(element)
//     )
// );

// printing rows by rows 
let prints = scores.map(
    row => console.log(row)
)