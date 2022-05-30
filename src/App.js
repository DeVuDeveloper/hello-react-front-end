/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';
import Greeting from './components/Greeting';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/greetings" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
