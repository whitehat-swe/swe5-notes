---
id: arrow-functions
title: Arrow Functions
sidebar_label: Arrow Functions
---

## Simple return
### Explicit return with body
```js
const addNums = (numOne, numTwo) => {
  return numOne + numTwo
}
```

### Explicit single line return
```js
const addNums = (numOne, numTwo) => { return numOne + numTwo }
```

### Implicit return with body
```js
const addNums = (numOne, numTwo) => (
  numOne + numTwo
)
```

### Implicit return on single line
```js
const addNums = (numOne, numTwo) => numOne + numTwo
```