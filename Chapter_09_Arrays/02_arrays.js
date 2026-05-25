
let browsers = ["chrome", "firefox", "safari"];



let score = new Array(3); // empty array  <3 empty items> ]
console.log(score);

let score2 = new Array(1, "Jaspal", 3);
console.log(score2);

// array elements are stored in continous memory

// array can be created using array.of
let test = Array.of(10, 20, 30);
console.log(test);


// using from divides characters
let chars = Array.from("hello");
console.log(chars); // cant be used with numbers