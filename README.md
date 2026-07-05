# 🚀 Full-Stack JavaScript & Automation Learning Journey

Welcome to the comprehensive learning repository for JavaScript, TypeScript, and Playwright. This project is designed as a structured path to take you from a complete beginner to an advanced automation engineer.

## 📖 Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Detailed Chapter Roadmap](#detailed-chapter-roadmap)
- [How to Run the Code](#how-to-run-the-code)
- [Project Structure](#project-structure)

---

## 📌 Project Overview
This repository contains a curated set of examples, exercises, and projects. It covers the entire evolution of JavaScript—from basic syntax and data types to asynchronous programming, Object-Oriented Programming (OOP), static typing with TypeScript, and end-to-end (E2E) testing using Playwright.

---

## 🛠️ Getting Started

### 1. Clone the Repository
To get a local copy of this project, run the following commands in your terminal:

```bash
# Clone the repository
git clone <your-repo-url>

# Enter the project directory
cd LEARNPLAYWRIGHT2xBATCH
```

### 2. Prerequisites
Ensure you have the following installed:
- **Node.js** (LTS version recommended): [Download Node.js](https://nodejs.org/)
- **TypeScript** (for TS chapters): `npm install -g typescript ts-node`
- **Code Editor**: Visual Studio Code (Recommended)

---

## 🗺️ Detailed Chapter Roadmap

### 🟢 Phase 1: The Foundations (JS Basics)
| Chapter | Name | Detailed Description |
| :--- | :--- | :--- |
| **01** | **Basics** | Introduction to JS syntax, printing to console, basic operations, and naming rules for identifiers. |
| **02** | **JS Concepts** | Understanding how JS works: Variables (`let`, `const`, `var`), function hoisting, and the execution context. |
| **03** | **Literal** | Deep dive into data types: Strings, Numbers, Booleans, `null`, `undefined`, and how literals are represented. |
| **04** | **Operator** | Comprehensive guide to Arithmetic, Comparison, Logical operators, and the modern Nullish Coalescing operator. |
| **05** | **Conditionals** | Mastering control flow: `if`, `else if`, `else` statements, and understanding "truthy" vs "falsy" values. |
| **06** | **Switch JS** | Implementing efficient multi-way branching using the `switch` statement. |
| **07** | **User Input** | Learning how to interact with users and capture input in a JavaScript environment. |
| **08** | **Loops** | Iteration techniques: `for` loops, `while` loops, `do-while` loops, and complex pattern printing exercises. |
| **09** | **Arrays** | Array initialization, indexing, and essential built-in methods for data manipulation. |
| **10** | **Functions** | Creating reusable code: Function declarations, expressions, parameters, return types, and scope. |

### 🟡 Phase 2: Advanced JavaScript (The Engine)
| Chapter | Name | Detailed Description |
| :--- | :--- | :--- |
| **11** | **Closures** | Advanced scope management: Lexical scoping, creating closures, and encapsulating private variables. |
| **12** | **Strings** | Mastery of string manipulation, template literals, and built-in methods for text processing. |
| **13** | **Objects** | Understanding JS Objects: Literals, property descriptors, methods, and dynamic object manipulation. |
| **14** | **Multi Dim Array** | Handling complex data structures: Matrices, nested arrays, and multi-dimensional traversal. |
| **15** | **Callback** | Introduction to Asynchronous JS: Passing functions as arguments and the callback pattern. |
| **16** | **Promise** | Managing async operations: Creating Promises, `.then()`, `.catch()`, and `.finally()`. |
| **17** | **Async Await** | The modern way to handle promises: Using `async` and `await` for cleaner, synchronous-looking async code. |

### 🔵 Phase 3: Professional Tooling & Architecture
| Chapter | Name | Detailed Description |
| :--- | :--- | :--- |
| **19** | **Playwright Basics** | **Full Automation Suite**: Setup, browser contexts, page interactions, assertions, and E2E testing frameworks. |
| **20** | **JS OOPS** | Object-Oriented Programming: Classes, constructors, inheritance, and prototype-based inheritance. |
| **21** | **TypeScript** | Introduction to static typing: Type annotations, compilation from TS to JS, and basic TS syntax. |
| **22** | **TS Interfaces** | Defining structural contracts: Interfaces, optional properties, read-only properties, and type checking. |
| **23** | **TS Enums** | Working with enumerated types: Numeric, string, and heterogeneous enums, and their use cases. |
| **24** | **TS Generics** | Reusable type-safe components: Generic functions, interfaces, and classes for flexible yet type-safe code. |
| **25** | **Public, Private, Protected** | Access modifiers in TypeScript: Controlling visibility and encapsulation in classes. |
| **26** | **Type Decorators** | Advanced TypeScript: Using decorators to modify class behavior and metadata reflection. |

### 🎯 Practice & Application
- **Coding Questions Practice**: A dedicated folder containing algorithmic challenges and logic puzzles to apply everything learned across all chapters.

Note: Coding questions practice changes should be mentioned last in contents as well as Chapters in the readme file.

---

## 🚀 How to Run the Code

### Running JavaScript Files
Navigate to the chapter folder and use `node`:
```bash
# Example: Run Basics file
node Chapter_01_Basics/01_Basics.js
```

### Running TypeScript Files
Use `ts-node` to execute TypeScript files directly:
```bash
# Example: Run TypeScript hello world
npx ts-node Chapter_21_Typescript/01_helloworld.ts
```

### Running Playwright Tests
The Playwright chapter is a standalone project. Follow these steps:
```bash
# 1. Navigate to the Playwright directory
cd Chapter_19_playwright_basics

# 2. Install dependencies
npm install

# 3. Run the tests
npx playwright test
```

---

## 📂 Project Structure
```text
.
├── Chapter_01_Basics/             # Basics & Syntax
├── Chapter_02_Javascript_concepts/ # Core JS Engine Concepts
├── Chapter_03_Literal/             # Data Types & Literals
├── Chapter_04_Operator/            # Operators & Logic
├── Chapter_05_conditionals/        # If/Else & Logic
├── Chapter_06_switch_js/          # Switch Statements
├── Chapter_07_userinput/          # Input Handling
├── Chapter_08_Loops/               # Iterations & Patterns
├── Chapter_09_Arrays/             # Array Methods
├── Chapter_10_functions/          # Function Logic
├── Chapter_11_Closures/            # Scope & Closures
├── Chapter_12_Strings/             # String Manipulation
├── Chapter_13_Objects/            # JS Objects
├── Chapter_14_multi_dim_array/     # Matrices/Nested Arrays
├── Chapter_15_Callback/            # Async Callbacks
├── Chapter_16_promise/            # Promise Handling
├── Chapter_17_Aync_Await/          # Modern Async/Await
├── Chapter_19_playwright_basics/    # E2E Testing Framework
├── Chapter_20_JS_OOPS/             # OOP Classes & Inheritance
├── Chapter_21_Typescript/          # TS Basics
├── Chapter_22_TS_Interfaces/       # TS Interfaces
├── Chapter_23_Typescript_enums/     # TS Enums
├── Chapter_24_Typescript_generic/   # TS Generics
├── Chapter_25_Public_Private_Protected/ # TS Access Modifiers
├── Chapter_26_Type_decorator/       # TS Decorators
└── Coding_questions_practice/      # Algorithmic Challenges
```

---
**Happy Learning! 💻**
