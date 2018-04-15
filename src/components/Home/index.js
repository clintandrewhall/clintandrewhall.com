// @flow

import React from 'react';

import Header from './../core/Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Posts from './Posts';

const Home = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Posts />
    </div>
  );
};

export default Home;
