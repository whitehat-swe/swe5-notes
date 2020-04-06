---
id: use-state
title: useState
sidebar_label: useState
---

```jsx
import React, { useState } from 'react'

function Demo() {
  const [headerText, setHeaderText] = useState('Here is my initial state')

  const updateHeaderText = () => {
    setHeaderText("I have changed the state!")
  }

  return (
    <>
      <h1>{headerText}</h1>
      <button onClick={updateHeaderText}>
        Click to change state
      </button>
    </>
  )
}
```