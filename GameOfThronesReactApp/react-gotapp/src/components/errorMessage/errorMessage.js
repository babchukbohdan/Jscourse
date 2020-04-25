import React from 'react';
import './errorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
  return (
    <>
      <img src={img} alt='error'></img>
      <span>Something gone wrong</span>
    </>
  )
};

// process.env.PUBLIC_URL + '/img/got.jpeg' import from public
export default ErrorMessage;