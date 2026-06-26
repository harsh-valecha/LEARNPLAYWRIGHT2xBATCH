let unknown: unknown = "Hello";

if (typeof unknown === "string") {
    console.log("Hi");
}

let message: string = "Hello";

let username: string;


function greet(name: string): string {
    return `Hello ${name}`;
}


function throwError(message: string): never {
    throw new Error(message);
}

// function infiniteLoop():never{
//     while(true){

//     }
// }