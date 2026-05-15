/**
 * Hoisting & TDZ (Temporal Dead Zone) — var vs let vs const
 *
 * ─────────────────────────────────────────────────────
 * 1. var — HOISTED + initialized to undefined
 *    Declaration is hoisted to top, initialized with undefined.
 *    Accessing before declaration → undefined (NO error).
 *    No TDZ.
 *
 * 2. let — HOISTED + NOT initialized (TDZ)
 *    Declaration is hoisted, but NOT initialized.
 *    Accessing before declaration → ReferenceError (TDZ).
 *    TDZ: from start of scope → until `let` line is reached.
 *
 * 3. const — HOISTED + NOT initialized (TDZ)
 *    Same hoisting behavior as let.
 *    TDZ applies just like let.
 *    Must be initialized at declaration (unlike let).
 *
 * 4. function — HOISTED + fully initialized
 *    Entire function body is hoisted.
 *    Can be called before declaration.
 *    No TDZ.
 */

// ===== 1. var hoisting (no TDZ) =====
console.log('\n--- var ---')
console.log(myVar) // undefined (hoisted & auto-initialized)
var myVar = 10
console.log(myVar) // 10

// ===== 2. let hoisting (TDZ exists) =====
console.log('\n--- let ---')
try {
  console.log(myLet) // ReferenceError: Cannot access before initialization
} catch (e) {
  console.log('TDZ error:', e.message)
}
let myLet = 20
console.log(myLet) // 20

// ===== 3. const hoisting (TDZ exists) =====
console.log('\n--- const ---')
try {
  console.log(myConst) // ReferenceError: Cannot access before initialization
} catch (e) {
  console.log('TDZ error:', e.message)
}
const myConst = 30
console.log(myConst) // 30

// const MUST be initialized at declaration (unlike let)
// const x // SyntaxError: Missing initializer in const declaration

// ===== 4. function hoisting (fully hoisted) =====
console.log('\n--- function ---')
sayHi() // works — "Hi!"
function sayHi() {
  console.log('Hi!')
}

// ===== 5. TDZ explained visually =====
{
  // ─── TDZ starts ───
  // x is in TDZ here — cannot access
  // console.log(x) // would throw ReferenceError

  let x = 100 // ─── TDZ ends here ───
  // x is now accessible
  console.log('x inside block:', x) // 100
}
// x is out of scope here
