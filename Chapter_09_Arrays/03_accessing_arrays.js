// accessing and modifying  -- use simple way only 

let statuses = ["fail", "pass", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);


// reverese indexing 
console.log(statuses[-1]); // shows undefined
console.log(statuses.at(-1));// works and shows last value
console.log(statuses.at(-4));// shows undefined