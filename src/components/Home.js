/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <h1>Testing</h1>
      <Link to="/greetings" className="button3">Go to Greetings page</Link>
    </div>
  );
};

export default Homepage;
