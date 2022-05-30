/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Greetings = () => {
  return (
    <div className="greeting-wrapper">
      <h1>Rails-React exercise</h1>
      <Link to="/" className="button2">Home</Link>
    </div>
  );
};

export default Greetings;
