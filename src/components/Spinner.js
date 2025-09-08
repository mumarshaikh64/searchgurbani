// import '../assets/css/spinner.css';
import React from 'react';
import { Rings } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className='spinnerbackground'>
      <Rings
        height="80"
        width="80"
        radius="9"
        color='var(--current-color, var(--color-1))'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}} // Ensure this is an object
        wrapperclassName=""
      />
    </div>
  );
}

export default Spinner;
