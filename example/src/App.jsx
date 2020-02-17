import React, { useState, useRef } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useDebouncedEffect from 'use-debounced-effect-hook';
import useStyles from './styles';

const App = () => {
  const renderCountRef = useRef(0);

  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const [debouncedValue, setDebouncedValue] = useState('');
  const [debouncedValue2, setDebouncedValue2] = useState('');

  const handleInputChange = ({ target: { value } }) => setInputValue(value);
  const handleInputChange2 = ({ target: { value } }) => setInputValue2(value);

  useDebouncedEffect(() => {
    setDebouncedValue(inputValue);
  }, [
    inputValue,
  ], 2000);

  useDebouncedEffect(() => {
    setDebouncedValue2(inputValue2);
  }, [
    inputValue2,
  ], 5000);

  const classes = useStyles();

  renderCountRef.current += 1;

  return (
    <Grid container spacing={3} className={classes.centerContent}>
      <Grid item xs={12} className={classes.marginTop5}>
        <Typography variant="h3">
          Use Debounced Effect!
          <span role="img" aria-label="awesome"> ⚛️</span>
        </Typography>
      </Grid>

      <Grid item xs={12} className={[classes.marginTop5, classes.centerContent]}>
        <Typography variant="h5">
          useEffect hook from ReactJS debounced!
        </Typography>

        <Typography variant="subtitle1" className={classes.marginTop2}>
          You can use as many useDebouncedEffects as you like,
          there will be no unnecessary re-renders.
        </Typography>

        <Typography variant="subtitle1" className={classes.marginTop2}>
          Render count:
          {renderCountRef.current}
        </Typography>
      </Grid>

      <Grid container spacing={3} className={classes.marginTop5}>
        <Grid item xs={12} sm={6} className={classes.centerContent}>
          <p className={classes.marginTop2}>
            This value below will change with a debounce of 2 seconds.
          </p>

          <input type="text" className="input" value={inputValue} onChange={handleInputChange} />

          <p className={classes.marginTop2}>
            {debouncedValue || '-'}
          </p>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.centerContent}>
          <p className={classes.marginTop2}>
            This value below will change with a debounce of 5 seconds.
          </p>

          <input type="text" className="input" value={inputValue2} onChange={handleInputChange2} />

          <p className={classes.marginTop2}>
            {debouncedValue2 || '-'}
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
