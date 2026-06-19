import { BASE_URL as base_test, formatTestName as testfn } from "./01_testutils.js";
import { BASE_URL as util_test, formatTestName as utilsfn } from "./02_utils.js";

console.log(base_test);
let result = testfn("login page");
console.log(result);