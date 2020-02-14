import React, { useState } from 'react';

import useDebouncedEffect from 'use-debounced-effect-hook';

const App = () => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target: { value } }) => setInputValue(value);

  useDebouncedEffect(() => {
    setDebouncedValue(inputValue);
  }, [
    inputValue,
  ], 2000);

  return (
    <div className="container">
      <h2>
        Use Debounced Effect!
        <span role="img" aria-label="awesome"> ⚛️</span>
      </h2>

      <input type="text" className="input m-t-20" value={inputValue} onChange={handleInputChange} />

      <p className="m-t-20">
        This value will change with a debounce of 2 seconds:
        {debouncedValue}
      </p>
    </div>
  );
};

export default App;
