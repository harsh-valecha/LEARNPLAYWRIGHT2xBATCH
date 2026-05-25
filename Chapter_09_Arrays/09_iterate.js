let tests = ["login", "logout", "search"];


for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log("------");
// for of
for (test of tests) {
    console.log(test);
}
console.log("------");
tests.forEach((test, index) => {
    console.log(test, index);
});

console.log("------");
for (let test in tests) {
    console.log(test, "->", tests[test]);
}

