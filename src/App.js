// @flow

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/core/Header.js';
import Hero from './components/Hero';
import About from './components/About';

const App = () => (
  <Router>
    <div style={{ height: '100%', width: '100%' }}>
      <Header />
      <Hero />
      <About />
    </div>
  </Router>
);

export default App;
