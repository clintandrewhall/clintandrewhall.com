// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Rellax from 'rellax';

import ScrollToTopOnMount from '../core/ScrollToTopOnMount';
import Header from './../core/Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Medium from './Medium';
import Work from './Work';
import Footer from './../core/Footer';

import styles from './index.module.css';

type State = {
  triggerHeight: number,
};

class Home extends React.Component<{}, State> {
  heroRef = React.createRef();

  state: State = {
    triggerHeight: 0,
  };

  componentDidMount() {
    document.title = 'Clint Andrew Hall';
    window.addEventListener('fade-finished', () => {
      if (this.heroRef) {
        const node = ReactDOM.findDOMNode(this.heroRef.current);
        if (node instanceof HTMLElement) {
          this.setState({ triggerHeight: node.offsetHeight });
        }
      }
    });
    new Rellax('.rellax', {
      speed: -6,
    });
  }

  render() {
    const { triggerHeight } = this.state;
    return (
      <div style={{ height: '100%' }}>
        <div className={styles.rellax}>
          <div className={styles.background} />
        </div>
        <Header home={true} triggerHeight={triggerHeight} />
        <Hero ref={this.heroRef} />
        <About />
        <Portfolio />
        <Work />
        <Medium />
        <Footer />
        <ScrollToTopOnMount />
      </div>
    );
  }
}

export default Home;
