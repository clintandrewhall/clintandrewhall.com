// @flow

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

const App = () => (
  <Router>
    <div>
      <Header />
      <Home />
      <About />
    </div>
  </Router>
);

export default App;
