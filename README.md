# Learn Playwright 2x Batch

This repository contains a comprehensive curriculum for learning JavaScript and Playwright, moving from basic language concepts to advanced automation.

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS)

### Installation & Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running Tests
- Run tests in headless mode:
  ```bash
  npm run test
  ```
- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```
- View test reports:
  ```bash
  npm run show:report
  ```

## 📚 Curriculum

### 🟢 JavaScript Basics (Chapters 1-14)
- **Chapter 01:** Basics
- **Chapter 02:** JS Concepts (Hoisting, TDZ)
- **Chapter 03:** Literals
- **Chapter 04:** Operators
- **Chapter 05:** Conditionals
- **Chapter 06:** Switch Case
- **Chapter 07:** User Input
- **Chapter 08:** Loops
- **Chapter 09:** Arrays
- **Chapter 10:** Functions (Arrow, IIFE)
- **Chapter 11:** Closures
- **Chapter 12:** Strings
- **Chapter 13:** Objects (Destructuring)
- **Chapter 14:** Multi-dimensional Arrays

### 🔵 Asynchronous JavaScript (Chapters 15-17)
- **Chapter 15:** Callbacks (Sync/Async, Callback Hell)
- **Chapter 16:** Promises (all, allSettled)
- **Chapter 17:** Async/Await (Try/Catch, Parallel vs Sequential)

### 🎭 Playwright Basics (Chapter 19)
- Setup, Configuration, E2E Testing (TTA Cart), HTML Reports, GitHub Actions CI.

### 🏗️ Advanced JS & TypeScript (Chapters 20-22)
- **Chapter 20:** JavaScript Object Oriented Programming (OOPS)
- **Chapter 21:** TypeScript Basics
- **Chapter 22:** TypeScript Interfaces

## 🛠️ Project Structure
- `Chapter_XX/`: Contains lessons and practice files for each topic.
- `tsconfig.json`: TypeScript configuration.
- `playwright.config.ts`: Playwright test configuration.
