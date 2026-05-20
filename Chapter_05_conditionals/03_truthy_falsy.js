// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN

if (false) console.log("false is truthy");
else console.log("false is falsy");

if (0) console.log("0 is truthy");
else console.log("0 is falsy");

if ("") console.log('empty string is truthy');
else console.log('empty string is falsy');

if (null) console.log("null is truthy");
else console.log("null is falsy");

if (undefined) console.log("undefined is truthy");
else console.log("undefined is falsy");

if (NaN) console.log("NaN is truthy");
else console.log("NaN is falsy");

// Truthy values
if (1) console.log("1 is truthy");

if (-1) console.log("-1 is truthy");

if ("hello") console.log('"hello" is truthy');

if ([]) console.log("[] is truthy");

if ({}) console.log("{} is truthy");

if (Infinity) console.log("Infinity is truthy");
