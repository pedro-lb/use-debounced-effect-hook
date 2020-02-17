# use-debounced-effect-hook

> useEffect hook from ReactJS debounced!

[![NPM](https://img.shields.io/npm/v/use-debounced-effect-hook.svg)](https://www.npmjs.com/package/use-debounced-effect-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This implements a debounce action to the `useEffect` hook we all know, making it possible to execute debounced effects!

If you want to run some code everytime one variable changes, but not repeatedly (e.g. wait for the user to finish typing), this is the package for you =).

## Online Example

You can check this hook running [in this page](https://pedro-lb.github.io/use-debounced-effect-hook/).

## Install

You can use `yarn` or `npm`. Whatever floats your boat =).


### Yarn

```bash
yarn add use-debounced-effect-hook
```

### npm

```bash
npm install --save use-debounced-effect-hook
```

## Usage

You can also check [example](https://github.com/pedro-lb/use-debounced-effect-hook/tree/master/example) in this repo for more code!

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

## Contributing

Pull requests are welcome! If you have any feedback, issue or suggestion, feel free to open [a new issue](https://github.com/pedro-lb/formup/issues/new) so we can talk about it 💬.

## License

MIT © [pedro-lb](https://github.com/pedro-lb)

### Special Thanks

- Thank you to [github.com/hermanya](https://github.com/hermanya/create-react-hook) for the amazing lib [create-react-hook](https://github.com/hermanya/create-react-hook).
- Thank you to [github.com/xnimorz](https://github.com/xnimorz) for the amazing lib [use-debounce](https://github.com/xnimorz/use-debounce).
