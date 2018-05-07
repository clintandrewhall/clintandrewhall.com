// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Rellax from 'rellax';

import Header from './../core/Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Posts from './Posts';
import Work from './Work';

type State = {
  triggerHeight: number,
};

class Home extends React.Component<{}, State> {
  heroRef = React.createRef();

  state: State = {
    triggerHeight: 0,
  };

  componentDidMount() {
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
        <div className="rellax">
          <div className="background" />
        </div>
        <Header home={true} triggerHeight={triggerHeight} />
        <Hero ref={this.heroRef} />
        <About />
        <Portfolio />
        <Work />
        <Posts />
      </div>
    );
  }
}

export default Home;
