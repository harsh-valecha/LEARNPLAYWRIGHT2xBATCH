# Named Export vs Default Export

## Named Export (`export`)

A module can have **multiple** named exports. You must use the exact name when importing (or rename with `as`).

### Syntax

```js
// file: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```js
// file: app.js
import { add, subtract } from "./math.js";
// or rename:
import { add as addition } from "./math.js";
```

### Key points
- A module can have **many** named exports
- The import name must match the export name (or be aliased with `as`)
- Tree-shaking friendly — unused exports can be eliminated by bundlers

---

## Default Export (`export default`)

A module can have **only one** default export. You can import it with **any name** you choose.

### Syntax

```js
// file: logger.js
const log = (msg) => console.log(msg);
export default log;
```

```js
// file: app.js
import logger from "./logger.js";       // any name works
import myLogFunction from "./logger.js"; // same thing, different name
```

### Key points
- Only **one** default export per module
- No curly braces `{}` when importing
- You choose the import name — it does NOT need to match the exported name

---

## Side-by-Side Comparison

| Feature               | Named Export (`export`)      | Default Export (`export default`) |
|-----------------------|------------------------------|-----------------------------------|
| Quantity per module   | Multiple                     | Only one                          |
| Import syntax         | `import { name } from "..."` | `import anyName from "..."`       |
| Import name           | Must match (or use `as`)     | Any name you want                 |
| Refactoring safety    | Renaming needs updating      | Rename-safe on import side        |
| IDE autocompletion    | Better (exact names)         | No hint for the import name       |

---

## Mixed Exports (Both Together)

A module can use both named and default exports simultaneously:

```js
// file: utils.js
export const PI = 3.14;
export const greet = (name) => `Hello ${name}`;
export default function main() {
    console.log("Running main...");
}
```

```js
// file: app.js
import main, { PI, greet } from "./utils.js";
```

**Rule:** The default import comes **first**, then named imports inside `{}`.

---

## When to Use Which?

| Scenario                                        | Recommendation  |
|-------------------------------------------------|-----------------|
| A module exports a **single main thing**        | `export default` |
| A module exports **multiple utilities/helpers** | Named `export`   |
| You want **better IDE autocomplete**            | Named `export`   |
| Building a library with a **single entry point** | `export default` |
