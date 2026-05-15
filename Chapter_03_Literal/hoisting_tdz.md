# Hoisting & TDZ

## var
- Hoisted + auto-init `undefined` → **no TDZ**
- Access before decl → `undefined`

```js
console.log(x) // undefined
var x = 5
```

## let
- Hoisted + NOT initialized → **TDZ exists**
- Access before decl → `ReferenceError`

```js
console.log(x) // ReferenceError
let x = 5
```

## const
- Hoisted + NOT initialized → **TDZ exists**
- **Must** init at decl

```js
console.log(x) // ReferenceError
const x = 5
const y // SyntaxError
```

## function
- Fully hoisted → **no TDZ**
- Call before decl → works

```js
foo() // "hello"
function foo() { console.log('hello') }
```

## Summary Table

| Keyword  | Hoisted | Init'd | TDZ | Access Before Decl |
|----------|---------|--------|-----|-------------------|
| `var`    | Yes     | `undefined` | No  | `undefined`       |
| `let`    | Yes     | No     | Yes | `ReferenceError`  |
| `const`  | Yes     | No     | Yes | `ReferenceError`  |
| `function` | Yes  | Full body | No | Works fine     |

## TDZ Visual

```js
{
  // TDZ ── x inaccessible
  let x = 10 // TDZ ends
  // x accessible
}
```
