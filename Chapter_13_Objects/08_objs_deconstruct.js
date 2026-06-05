let user = { name: "Jaskirat", age: 34, country: "India" };
// let { name, age } = user;
// console.log(name, age);

const { name: userName, age: userAge } = user;
console.log(userName, userAge);



// default values
const { country = "USA" } = user;
console.log(country);// if contry not exist in object then USA
