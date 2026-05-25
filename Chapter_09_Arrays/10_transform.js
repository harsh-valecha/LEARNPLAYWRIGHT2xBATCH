let scores = [45, 82, 91, 60, 73];


// map transforms every element and returns a new array
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);//[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]


// filter will only keep the element that pass a condition
let passing = scores.filter(s => s > 70);
console.log(passing);//[ 82, 91, 73 ]


// reduce  - accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);


// flat
let nested = [[1, 2], [3, 4], [5, 6, 7]];
console.log(nested.flat());
