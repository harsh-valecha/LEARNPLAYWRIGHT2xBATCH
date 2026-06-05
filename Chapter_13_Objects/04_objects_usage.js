let config = {};
config.browser = "chrome";
config.timeout = 500;
config.testname = "login test";

console.log(config);
delete config.browser;
console.log(config);

// the below condition wont execute as. the key not exists
if (config.browser === "chrome") {
    console.log("i will execute the tc");
}
// console.log(config['browser']); -- undefined