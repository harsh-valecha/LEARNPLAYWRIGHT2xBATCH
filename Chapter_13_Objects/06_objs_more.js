// primitive  - number , boolean , string , null , undefined
// reference  - object , array , function


const t_json = {
    "name": "pramod",
    "age": 10
} // json
// console.log(t_json, typeof t_json);

const user = {
    name: "john",
    age: 23
}
console.log(user);
console.log(user.name);
console.log(user["age"]);

// updating value is possible 
user.name = "Jaskirat";
console.log(user);