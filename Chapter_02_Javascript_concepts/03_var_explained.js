var a = 10;
// var is function scoped
console.log(a); // global scope

// function scoped concept -- means inside the function itself it can change and reassigned , redeclared
function printHello() {
    console.log("Hello guys");
    var a = 20;
    console.log("Value of a:", a); // local scope
    if (true) {
        var a = 30;
        console.log("Now value:", a);
    }
}

printHello();
var a = 50;
console.log("again its changed:", a);
