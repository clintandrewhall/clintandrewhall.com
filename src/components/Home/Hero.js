// @flow

import React from 'react';
import Social from './Social.js';

import styles from './Hero.module.css';

class Hero extends React.PureComponent<{ heroRef: any }> {
  render() {
    return (
      <section id="home" className={styles.root} ref={this.props.heroRef}>
        <div className={styles.overlay} />
        <div className={styles.shadowOverlay} />
        <div className={styles.content}>
          <div className={styles.main}>
            <h2 className={styles.greeting}>Hello There...!</h2>
            <h1 className={styles.intro}>
              I'm Clint Andrew Hall. <br />
              I'm a User Interface Engineer <br />
              and Socially Adept Geek.
            </h1>
            <div className={styles.buttons}>
              <a href="#portfolio" className={styles.button}>
                Latest Projects
              </a>
              <a href="#about" className={styles.button}>
                More About Me
              </a>
            </div>
            <Social />
            <div className={styles.scroll}>
              <a href="#about" className={styles.scrollLink}>
                <span>Scroll Down</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
