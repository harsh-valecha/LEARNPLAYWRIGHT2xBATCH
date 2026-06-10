function calculate(a, b, callback) {
    return callback(a, b);
}

let sum = calculate(5, 10, function (x, y) {
    return x + y;
});

console.log("Sum of 2 numbers", sum);