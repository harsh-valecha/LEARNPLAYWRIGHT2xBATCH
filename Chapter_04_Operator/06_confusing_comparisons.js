/**
 * Confusing Comparison Operations in JavaScript
 *
 * Covers tricky coercion rules, edge cases, and gotchas.
 */

// ========== 1. Loose equality (==) coercion quirks ==========

console.log('--- 1. Loose equality gotchas ---')

console.log('' == 0)        // true  ('' → 0)
console.log('' == '0')      // false (both strings, no coercion)
console.log(' ' == 0)       // true  (' ' → 0)
console.log('\t' == 0)      // true  (whitespace → 0)
console.log('\n' == 0)      // true  (newline → 0)

console.log('' == false)    // true  ('' → 0, false → 0)
console.log('1' == true)    // true  ('1' → 1, true → 1)
console.log('2' == true)    // false ('2' → 2, true → 1)

// ========== 2. null and undefined with == ==========

console.log('\n--- 2. null & undefined ---')

console.log(null == undefined)  // true  (special rule)
console.log(null === undefined) // false

console.log(null == 0)    // false (null only == undefined)
console.log(null == '')   // false
console.log(null == false) // false

// ========== 3. NaN comparisons ==========

console.log('\n--- 3. NaN ---')

console.log(NaN == NaN)   // false (NaN is never equal to anything)
console.log(NaN === NaN)  // false
console.log(NaN != NaN)   // true  (!)
console.log(NaN !== NaN)  // true

console.log(isNaN(NaN))     // true
console.log(isNaN('abc'))   // true  (coerces to NaN first)
console.log(Number.isNaN('abc')) // false (no coercion — better)

console.log(Object.is(NaN, NaN)) // true (only way to check NaN === NaN)

// ========== 4. -0 and +0 ==========

console.log('\n--- 4. -0 vs +0 ---')

console.log(-0 === +0)    // true
console.log(-0 == +0)     // true
console.log(Object.is(-0, +0)) // false (distinguishes them)

console.log(1 / -0)       // -Infinity
console.log(1 / +0)       // Infinity

// ========== 5. Array coercion ==========

console.log('\n--- 5. Array comparisons ---')

console.log([] == false)   // true  ([] → '' → 0, false → 0)
console.log([] == 0)       // true  ([] → '' → 0)
console.log([] == '')      // true  ([] → '')

console.log([1] == true)   // true  ([1] → '1' → 1, true → 1)
console.log([1, 2] == '1,2') // true (toString of array)

console.log([] == [])      // false (different references)
console.log({} == {})      // false (different references)

// ========== 6. Object coercion ==========

console.log('\n--- 6. Object comparisons ---')

const a = { valueOf: () => 5 }
console.log(a == 5)  // true (valueOf is called)
console.log(a === 5) // false (different types)

const b = { toString: () => 'hello' }
console.log(b == 'hello')  // true

// ========== 7. Falsy value quirks ==========

console.log('\n--- 7. Falsy values ---')

console.log(false == 0)   // true
console.log(0 == '')      // true
console.log('' == false)  // true

// transitivity is broken!
console.log(false == 0 && 0 == '' && false == '') // false (false != '')
console.log(false == '')  // true… wait:

// Actually false == '' is true
// Let's verify properly:
console.log('false == "":', false == '')  // true

// Real broken transitivity:
console.log('' == '0')     // false
console.log(0 == '')       // true
console.log('' == 0)       // true — but '' == '0' is false!

// ========== 8. Ternary and comparison ==========

console.log('\n--- 8. Ternary gotchas ---')

console.log(3 > 2 > 1)    // false  (3>2 → true → 1, 1>1 → false)
console.log(1 < 2 < 3)    // true   (1<2 → true → 1, 1<3 → true)

// ========== 9. undefined vs null with loose operators ==========

console.log('\n--- 9. undefined edges ---')

let x
console.log(x == null)  // true
console.log(x == undefined) // true
console.log(x == 0)     // false
console.log(x == false) // false
console.log(x == NaN)   // false
console.log(x == '')    // false

// ========== 10. BigInt comparison ==========

console.log('\n--- 10. BigInt ---')

console.log(5n == 5)    // true  (loose allows BigInt-number)
console.log(5n === 5)   // false (different types)
console.log(5n == true) // false (5n ≠ 1)
console.log(0n == false) // true (0n == 0 == false)

// ========== Summary: Safe practices ==========

console.log('\n--- Summary: Safe practices ---')
console.log('✅ Use === and !== (avoid == and !=)')
console.log('✅ Use Object.is() for NaN/-0/+0 checks')
console.log('✅ Use Number.isNaN() instead of isNaN()')
