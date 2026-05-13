// Number types and base values in JavaScript

// --- Number Types ---

// 1. Number (64-bit floating point - IEEE 754)
let int = 42;
let float = 3.14;
let negative = -10;
let exp = 2.5e3; // 2500

// Special Number values
let infinity = Infinity;
let notANumber = NaN;

// 2. BigInt (for integers larger than 2^53 - 1)
let big = 123456789012345678901234567890n;
let bigFromConstructor = BigInt("9007199254740992");

// Max safe integer in Number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// --- Number Bases (Radix) ---

// Base determines how a number is represented:
//   Base 2  (Binary)   → digits: 0-1
//   Base 8  (Octal)    → digits: 0-7
//   Base 10 (Decimal)  → digits: 0-9
//   Base 16 (Hex)      → digits: 0-9, A-F

// Binary (0b prefix)
let binary = 0b1010; // 10 in decimal
console.log(binary); // 10

// Octal (0o prefix)
let octal = 0o77; // 63 in decimal
console.log(octal); // 63

// Decimal (no prefix - default)
let decimal = 42;

// Hexadecimal (0x prefix)
let hex = 0xFF; // 255 in decimal
console.log(hex); // 255

// 2. Octal - legacy Unix file permissions, some encoding contexts
let fileMode = 0o755; // rwxr-xr-x

// 3. Decimal - everyday human-readable numbers

// 4. Hex - memory addresses, color codes, character encoding
let color = 0xFF5733; // orange in hex color

// --- Converting between bases ---
let num = 255;
console.log(num.toString(2));  // "11111111" (binary)
console.log(num.toString(8));  // "377" (octal)
console.log(num.toString(16)); // "ff" (hex)

// Parsing strings with different bases
console.log(parseInt("1010", 2));  // 10
console.log(parseInt("FF", 16));   // 255
console.log(parseInt("77", 8));    // 63
