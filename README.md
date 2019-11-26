# use-debounced-effect-hook

> useEffect hook from ReactJS debounced!

[![NPM](https://img.shields.io/npm/v/use-debounced-effect-hook.svg)](https://www.npmjs.com/package/use-debounced-effect-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-debounced-effect-hook
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-debounced-effect-hook'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [pedro-lb](https://github.com/pedro-lb)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
