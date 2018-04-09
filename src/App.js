// @flow

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About';

const App = () => (
  <Router>
    <div style={{ height: '100%', width: '100%' }}>
      <Header />
      <Home />
      <About />
    </div>
  </Router>
);

export default App;
