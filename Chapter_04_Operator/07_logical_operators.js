/**
 * Logical Operators — &&, ||, !, ??
 *
 * &&  — AND (returns first falsy OR last truthy)
 * ||  — OR  (returns first truthy OR last falsy)
 * !   — NOT (inverts boolean)
 * ??  — Nullish Coalescing (returns RHS only if LHS is null/undefined)
 */

// ========== 1. AND (&&) ==========

console.log('--- && (AND) ---')

// If all truthy → returns LAST value
console.log(true && 'hello')  // 'hello'
console.log(1 && 2 && 3)      // 3

// If any falsy → returns FIRST falsy value
console.log(0 && 'hello')     // 0
console.log(1 && 0 && 3)      // 0
console.log(null && 'hi')     // null
console.log('' && 'world')    // ''

// ========== 2. OR (||) ==========

console.log('\n--- || (OR) ---')

// If any truthy → returns FIRST truthy value
console.log(0 || 'hello')     // 'hello'
console.log(null || 42)       // 42
console.log('' || 'fallback') // 'fallback'
console.log(false || 0 || '' || 'first truthy') // 'first truthy'

// If all falsy → returns LAST falsy
console.log(0 || null || '')  // ''

// Common pattern: default value
const name = '' || 'Guest'
console.log(name) // 'Guest'

// ========== 3. NOT (!) ==========

console.log('\n--- ! (NOT) ---')

console.log(!true)     // false
console.log(!false)    // true
console.log(!0)        // true  (0 is falsy)
console.log(!'')       // true  ('' is falsy)
console.log(!'hello')  // false ('hello' is truthy)

// Double NOT (!!) — converts to boolean
console.log(!!1)       // true
console.log(!!0)       // false
console.log(!!'abc')   // true
console.log(!!'')      // false

// ========== 4. Nullish Coalescing (??) ==========

console.log('\n--- ?? (Nullish Coalescing) ---')

// ?? returns RHS only when LHS is null or undefined
// Unlike ||, it does NOT treat 0, '', false as nullish

console.log(null ?? 'default')    // 'default'
console.log(undefined ?? 42)      // 42
console.log(0 ?? 100)             // 0  (not nullish)
console.log('' ?? 'fallback')     // '' (not nullish)
console.log(false ?? true)        // false (not nullish)

// || vs ?? difference
const score = 0
console.log(score || 100)  // 100   (0 is falsy → fallback)
console.log(score ?? 100)  // 0     (0 is not null/undefined → keeps it)

// ========== 5. Short-circuit evaluation ==========

console.log('\n--- Short-circuit ---')

// && short-circuits on first falsy
false && console.log('never runs')  // skipped

// || short-circuits on first truthy
true || console.log('never runs')   // skipped

// ?? short-circuits on non-nullish
'hello' ?? console.log('never runs') // skipped

// Practical example: guard operator
const user = { name: 'Alice' }
user.name && console.log('User has name:', user.name) // runs
const empty = null
// empty && console.log('won't run') // skipped

// ========== 6. Combined logic ==========

console.log('\n--- Combined ---')

console.log(true && false || true)   // true  (&& before ||)
console.log(false || true && false)  // false (&& before ||)
console.log(!true && false || true)  // true

// ========== 7. Truthy/Falsy reference ==========

console.log('\n--- Falsy values (all convert to false) ---')

const falsyValues = [false, 0, -0, 0n, '', null, undefined, NaN]
falsyValues.forEach(v => console.log(`  !${v} ===`, !v))

console.log('Everything else is truthy')
