# JavaScript String Methods — Complete Cheatsheet

## Creating Strings

```js
'Hello'                 // single quotes
"World"                 // double quotes
`Hello ${name}`         // template literal (interpolation, multiline)
String(value)           // converts any value to string
new String("Hello")     // String object (rarely used)
```

## Static Methods

| Method | Description | Example |
|--------|-------------|---------|
| `String.fromCharCode(c1, c2, ...)` | String from UTF-16 codes | `String.fromCharCode(65, 66)` → `"AB"` |
| `String.fromCodePoint(cp1, ...)` | String from Unicode code points | `String.fromCodePoint(9731)` → `"☃"` |
| `String.raw(template, ...subs)` | Raw template string (no escape processing) | `` String.raw`hello\nworld` `` → `"hello\\nworld"` |

## Character Access

| Method | Description | Example |
|--------|-------------|---------|
| `str[i]` | Bracket notation (read-only, undefined if out of range) | `"Hello"[1]` → `"e"` |
| `at(index)` | Supports negative index | `"Hello".at(-1)` → `"o"` |
| `charAt(index)` | Returns char at index (`""` if out of range) | `"Hello".charAt(0)` → `"H"` |
| `charCodeAt(index)` | UTF-16 code unit (0–65535) | `"A".charCodeAt(0)` → `65` |
| `codePointAt(index)` | Full Unicode code point (handles surrogates) | `"𝄞".codePointAt(0)` → `119070` |

## Searching

| Method | Description | Example |
|--------|-------------|---------|
| `indexOf(s, from?)` | First index (-1 if not found) | `"abc".indexOf("b")` → `1` |
| `lastIndexOf(s, from?)` | Last index (-1 if not found) | `"aba".lastIndexOf("a")` → `2` |
| `includes(s, pos?)` | Checks if substring exists | `"Hello".includes("ell")` → `true` |
| `startsWith(s, pos?)` | Checks start of string | `"https://a.com".startsWith("https")` → `true` |
| `endsWith(s, len?)` | Checks end of string | `"file.jpg".endsWith(".jpg")` → `true` |
| `search(regexp)` | First regex match index (-1 if not found) | `"abc123".search(/\d+/)` → `3` |
| `match(regexp)` | Returns match array or null | `"a1b2c3".match(/\d+/)` → `["1"]` |
| `matchAll(regexp)` | Iterator of all matches (requires global flag) | `[... "a1b2".matchAll(/\d/g)]` |

## Extracting Substrings

| Method | Description | Example |
|--------|-------------|---------|
| `slice(start, end?)` | Extracts from start to end (exclusive); supports negatives | `"Hello".slice(1, 4)` → `"ell"` |
| `substring(start, end?)` | Similar to slice; negatives treated as 0; swaps if start > end | `"Hello".substring(1, 4)` → `"ell"` |
| `substr(start, len?)` | **Deprecated** — start & length | `"Hello".substr(1, 3)` → `"ell"` |

## Case Conversion

| Method | Description | Example |
|--------|-------------|---------|
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` → `"hello"` |
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` → `"HELLO"` |
| `toLocaleLowerCase(locales?)` | Locale-aware lowercase (e.g. Turkish i) | `"İ".toLocaleLowerCase("tr")` |
| `toLocaleUpperCase(locales?)` | Locale-aware uppercase | `"i".toLocaleUpperCase("tr")` |

## Whitespace & Trimming

| Method | Description | Example |
|--------|-------------|---------|
| `trim()` | Removes whitespace from both ends | `" hi ".trim()` → `"hi"` |
| `trimStart()` / `trimLeft()` | Removes leading whitespace | `" hi ".trimStart()` → `"hi "` |
| `trimEnd()` / `trimRight()` | Removes trailing whitespace | `" hi ".trimEnd()` → `" hi"` |

## Replacing

| Method | Description | Example |
|--------|-------------|---------|
| `replace(s/r, replacement)` | Replaces first match (string or regex) | `"a-b-c".replace("-", ".")` → `"a.b-c"` |
| `replaceAll(s/r, replacement)` | Replaces all matches | `"a-b-c".replaceAll("-", ".")` → `"a.b.c"` |

*Note: replacement can be a string or a function. With regex, use `$&`, `$1`, `$\``, `$'` for match/substitutions.*

## Padding

| Method | Description | Example |
|--------|-------------|---------|
| `padStart(len, pad?)` | Pads start to target length | `"5".padStart(3, "0")` → `"005"` |
| `padEnd(len, pad?)` | Pads end to target length | `"5".padEnd(3, "0")` → `"500"` |

## Joining, Repeating & Splitting

| Method | Description | Example |
|--------|-------------|---------|
| `concat(s1, s2, ...)` | Concatenates strings | `"a".concat("b", "c")` → `"abc"` |
| `repeat(n)` | Repeats string n times | `"Hi".repeat(3)` → `"HiHiHi"` |
| `split(sep, limit?)` | Splits into array | `"a,b,c".split(",")` → `["a","b","c"]` |
| `[ ].join(sep)` | *(Array method)* Joins array into string | `["a","b"].join("-")` → `"a-b"` |

## Unicode & Normalization

| Method | Description | Example |
|--------|-------------|---------|
| `normalize(form?)` | Unicode normalization (NFC, NFD, NFKC, NFKD) | `"é".normalize("NFD")` |

## Locale Comparison

| Method | Description | Example |
|--------|-------------|---------|
| `localeCompare(s, loc?, opts?)` | Locale-aware comparison (-1, 0, 1) | `"a".localeCompare("b")` → `-1` |

## Type Conversion to Primitive

| Method | Description | Example |
|--------|-------------|---------|
| `valueOf()` | Returns primitive string value | `new String("a").valueOf()` → `"a"` |
| `toString()` | Returns string representation | `(200).toString()` → `"200"` |
| `parseInt(str, radix?)` | *(Global)* Parses integer | `parseInt("42px")` → `42` |
| `parseFloat(str)` | *(Global)* Parses float | `parseFloat("3.14rem")` → `3.14` |

## Deprecated HTML Wrapper Methods (still available)

| Method | Description |
|--------|-------------|
| `anchor(name)` | `<a name="...">` |
| `big()` | `<big>` |
| `blink()` | `<blink>` |
| `bold()` | `<b>` |
| `fixed()` | `<tt>` |
| `fontcolor(color)` | `<font color="...">` |
| `fontsize(size)` | `<font size="...">` |
| `italics()` | `<i>` |
| `link(url)` | `<a href="...">` |
| `small()` | `<small>` |
| `strike()` | `<strike>` |
| `sub()` | `<sub>` |
| `sup()` | `<sup>` |

## Operator-based Operations

| Operator | Description | Example |
|----------|-------------|---------|
| `+` / `+=` | Concatenation | `"a" + "b"` → `"ab"` |
| `===` / `!==` | Strict equality (case-sensitive) | `"a" === "a"` → `true` |
| `>` / `<` / `>=` / `<=` | Lexicographic comparison | `"b" > "a"` → `true` |
| `[...str]` | Spread → array of characters | `[..."ab"]` → `["a","b"]` |
| `for (let ch of str)` | Iterate characters | |
