# Learn Playwright 2x Batch

A structured learning repository for mastering Playwright - a browser automation framework by Microsoft.

## Chapters

- **Chapter 01: Basics** - JavaScript fundamentals for Playwright (variables, console, process commands, identifier rules, basic operations)
- **Chapter 02: JavaScript Concepts** - Core JS concepts (variables, functions, var/let/const, hoisting)
- **Chapter 03: Literals** - JavaScript literal types, null vs undefined, number types & bases, string literals, hoisting & TDZ
- **Chapter 04: Operators** - Arithmetic, modulus, compound assignment, comparison, confusing comparisons, logical operators
- **Chapter 05: Conditionals** - if/else, truthy/falsy, practice questions (even-odd, student grades, leap year)
- **Chapter 06: Switch** - switch statement basics and usage
- **Chapter 07: User Input** - handling user input in JavaScript
- **Chapter 08: Loops** - for loops, while loops, do-while, interview questions
- **Chapter 09: Arrays** - array creation, access, modification, adding/removing elements, searching, iteration, transformation
- **Chapter 10: Functions** - function basics, practice exercises, arrow functions
- **Chapter 11: Closures** - closure introduction, real-world examples, practice exercises
- **Chapter 12: Strings** - string basics, properties, search, substring, transformation, conversion, palindrome practice
- **Chapter 13: Objects** - object basics, creation, properties & methods, usage, destructuring, multilevel objects, copying, methods, interview questions
- **Chapter 14: Multi-Dimensional Arrays** - 2D arrays/grids, nested loops, real-world test matrices, map/reduce on 2D arrays, filtering failures, pyramid pattern interview questions
- **Chapter 15: Callbacks** - callback functions, passing functions as arguments, synchronous vs asynchronous callbacks (setTimeout, forEach), Playwright-style test callbacks, callback hell (nested callbacks), callbacks with parameters & return values
- **Chapter 16: Promises** - creating promises, resolve/reject, then/catch/finally, promise chaining, Promise.all, Promise.allSettled, interview questions
- **Chapter 17: Async Await** - async/await syntax basics, try/catch/finally error handling, sequential vs parallel promise execution, E2E test flow simulation, interview questions
- **Chapter 19: Playwright Basics** - Playwright setup, project configuration, sample E2E test for TTA Cart, headless/headed execution, HTML report, GitHub Actions CI
- **Chapter 20: TypeScript** - Named exports, default exports, import aliasing (`as`), classes, OOP concepts (constructor, this, private, static, encapsulation, interface, inheritance, abstraction, polymorphism)
- **Coding Questions Practice** - solved coding exercises (user input, multiplication table, grade calculator, leap year checker, vowels/consonants count, prime number checker, duplicate characters)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Getting Started

```bash
# Clone the repo
git clone <repo-url>

# Navigate to a chapter
cd Chapter_01_Basics

# Run a JavaScript file
node 01_Basics.js

# Run Playwright examples
cd Chapter_19_playwright_basics
npm install
npx playwright install          # Install browsers (first time only)
npm run version                 # Show Playwright version
npm run test                    # Run tests headless
npx playwright test --headed    # Run tests in headed mode
npm run show:report             # Open the HTML test report
```

## Project Structure

```
LEARNPLAYWRIGHT2xBATCH/
├── Chapter_01_Basics
├── Chapter_02_Javascript_concepts
├── Chapter_03_Literal
├── Chapter_04_Operator
├── Chapter_05_conditionals
├── Chapter_06_switch_js
├── Chapter_07_userinput
├── Chapter_08_Loops
├── Chapter_09_Arrays
├── Chapter_10_functions
├── Chapter_11_Closures
├── Chapter_12_Strings
├── Chapter_13_Objects
├── Chapter_14_multi_dim_array
├── Chapter_15_Callback
├── Chapter_16_promise
├── Chapter_17_Aync_Await/         # Async/await examples and interview questions
│   ├── 01_aync.js
│   ├── 02_simple_ex.js
│   ├── 03_pyaramid_doom.js
│   ├── 04_basic.js
│   ├── 05_aa_seq.js
│   ├── 06_aa_parallel.js
│   └── 07_IQ.js
├── Chapter_19_playwright_basics/  # Playwright installation, config, tests and CI
│   ├── .github/
│   │   └── workflows/
│   │       └── playwright.yml     # GitHub Actions workflow
│   ├── tests/
│   │   └── example.spec.ts        # Sample E2E test (TTA Cart title verification)
│   ├── playwright.config.ts       # Playwright test configuration
│   ├── package.json
│   └── .gitignore
├── Chapter_20_typescript/         # Export/import, classes, OOP concepts
│   ├── 01_basics_oops.js          # Overview of export/import and OOP concepts
│   ├── 01_testutils.js            # Named exports (BASE_URL, formatTestName)
│   ├── 02_utils.js                # Named exports for utility functions
│   ├── 03_logger.js               # Default + named exports
│   ├── 04_logger_import.js        # Importing default and named exports
│   ├── 05_classes.js              # OOP class basics
│   ├── EXPORT_IMPORT.js           # Import aliasing with `as`
│   └── explain_default.md         # Named vs default export documentation
└── Coding_questions_practice/     # Solved JavaScript coding exercises
```

## Continuous Integration

Playwright tests are run automatically via GitHub Actions on every push and pull request to `main`/`master`.
See `.github/workflows/playwright.yml` in `Chapter_19_playwright_basics` for details.

## Contents

| Chapter | Topic |
|---------|-------|
| Chapter_01_Basics | JavaScript basics, console commands, variable operations, identifier rules |
| Chapter_02_Javascript_concepts | Variables (var/let/const), functions, hoisting |
| Chapter_03_Literal | Literal types, null vs undefined, number bases, string literals, template literals, hoisting & TDZ |
| Chapter_04_Operator | Arithmetic, modulus, compound assignment, comparison operators, confusing comparisons, logical operators |
| Chapter_05_conditionals | If/else, truthy/falsy, practice questions (even-odd, student grades, leap year) |
| Chapter_06_switch_js | Switch statement basics and usage |
| Chapter_07_userinput | Handling user input in JavaScript |
| Chapter_08_Loops | For loops, while loops, do-while, interview questions |
| Chapter_09_Arrays | Array creation, access, modification, adding/removing, searching, iteration, transformation |
| Chapter_10_functions | Function basics, practice exercises, arrow functions, IIFE, default params, spread, pure functions |
| Chapter_11_Closures | Closure introduction, real-world examples, practice exercises |
| Chapter_12_Strings | String basics, properties, search methods, substring, transformation, conversion, palindrome |
| Chapter_13_Objects | Object basics, creation, properties & methods, usage, destructuring, multilevel objects, copy, methods, interview questions |
| Chapter_14_multi_dim_array | 2D arrays & grids, nested loops, real-world test matrices, map/reduce on 2D, filtering failures, pyramid pattern |
| Chapter_15_Callback | Callback functions, sync/async callbacks, setTimeout/forEach, callback hell, callbacks with parameters & return values |
| Chapter_16_promise | Creating promises, resolve/reject, then/catch/finally, promise chaining, Promise.all, Promise.allSettled, interview questions |
| Chapter_17_Aync_Await | Async/await syntax, try/catch/finally, sequential vs parallel execution, E2E flow simulation, interview questions |
| Chapter_19_playwright_basics | Playwright setup, config, sample E2E test (TTA Cart), headless/headed execution, HTML report, GitHub Actions CI |
| Chapter_20_typescript | Named exports, default exports, import aliasing (`as`), classes, OOP concepts (constructor, this, private, static, encapsulation, interface, inheritance, abstraction, polymorphism) |
| Coding_questions_practice | Solved coding exercises: user input, multiplication table, grade calculator, leap year checker, vowels/consonants count, prime number checker, duplicate characters |

---

Built for learning Playwright end-to-end testing.
