# use-debounced-effect-hook

> useEffect hook from ReactJS debounced!

[![NPM](https://img.shields.io/npm/v/use-debounced-effect-hook.svg)](https://www.npmjs.com/package/use-debounced-effect-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This implements a debounce action to the `useEffect` hook we all know, making it possible to execute debounced effects!

If you want to run some code everytime one variable changes, but not repeatedly (e.g. wait for the user to finish typing), this is the package for you =).

## Install

```bash
npm install --save use-debounced-effect-hook
```

or

```bash
yarn add use-debounced-effect-hook
```

## Usage

```jsx
import React, { useState } from 'react'

import useDebouncedEffect from 'use-debounced-effect-hook'

const App = () => {
  const [search, setSearch] = useState("");

  const searchInApi = (searchValue) => {
    // Do your API request here.
  };

  // This will only fire useEffect once in 1s (1000ms) when search changes.
  // This is done to prevent unnecessary code execution repeatedly.
  useDebouncedEffect(
    () => searchInApi(search),
    [ search ],
    1000, // The debounce delay
  );

  return (
    <>
      <input
        onChange={({target: { value }}) => setSearch(value)}
        type="text"
      />
    </>
  )
}
```

## License

MIT © [pedro-lb](https://github.com/pedro-lb)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
