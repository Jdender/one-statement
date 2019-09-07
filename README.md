# One Statement

Making programs in JavaScript with only one statement.

## Table of Contents

<!--
    markdown-toc -i README.md
-->

<!-- toc -->

- [Rules](#rules)
  * [1. Only One Top-level Statement](#1-only-one-top-level-statement)
  * [2. No Code Blocks](#2-no-code-blocks)
  * [3. No eval() or Function()](#3-no-eval-or-function)

<!-- tocstop -->

Generated using [markdown-toc](https://www.npmjs.com/package/markdown-toc).

## Rules

Really the only rule you have to worry about is your code should only have one statement.

These following rules just flush out what counts and what doesn't.

### 1. Only One Top-level Statement

Your code should only have one statement.

```javascript
// Good
( --snip-- );

// Good
export default ( --snip-- );

// Good (TypeScript exclusive)
export = ( --snip-- );

// Bad
--snip--; 
--snip--;

// Bad
import {} from ''; 
--snip--;
```

### 2. No Code Blocks

Curly brackets are allowed for object literals and deconstructing, but code blocks are forbidden.

```javascript
// Good: Object
({ foo: 'bar' })

// Bad: Code block
{ const foo = 'bar'; }

// Good: Deconstructing
{ foo } = --snip--

// Good: Typed Deconstructing (TS)
{ foo }: Foo = --snip--

// Good: Returning Object
() => ({})

// Bad: Code block
() => { return {}; }
```

### 3. No eval() or Function()

Using `eval()` or the function constructor either explicitly or indirectly is forbidden.

```javascript
// Bad
eval()

// Bad: Indirect
window['e' + 'v' + 'a' + 'l']()

// Bad
Function('')

// Bad: Indirect
[].constructor.constructor('')
```
