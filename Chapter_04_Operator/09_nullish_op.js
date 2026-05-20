let username = null;
let displayName = username ?? "Guest";
console.log(displayName);

let userAge = 0;
let age = userAge ?? 18;
console.log(age);

let userCity = undefined;
let city = userCity ?? "Mumbai";
console.log(city);

let price = 0;
let finalPrice = price || 100;
let actualPrice = price ?? 100;
console.log(finalPrice, actualPrice);
