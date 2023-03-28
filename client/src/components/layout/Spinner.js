import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        style={{ margin: 'auto', width: '200px', display: 'block' }}
        alt='Loading...'
      />
    </>
  );
};

export default Spinner;
