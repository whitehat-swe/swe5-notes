---
id: props
title: Component Props
sidebar_label: Component Props
---

React components are functions that can optionally take *one* argument.

This argument is an object, conventionally called `props`.

```jsx
import React from 'react'

function Person(props) {
  return (
    <>
      <h1>Hi, I'm {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Favourite food: {props.food}</p>
      <p>Random fact: {props.fact}</p>
    </>
  )
}
```