// TDZ happen only for let and const

let x = "global";
if (true) {
    // here tdz is there
    // console.log(x); //-- gives ReferenceError
    let x = "local";
    // console.log(x);
}