// @flow

import React from 'react';
import Social from './Social.js';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section
      id="home"
      className={styles.home}
      data-parallax="scroll"
      data-image-src="images/hero-two.jpg"
      data-natural-width={3000}
      data-natural-height={2000}
      data-position-y="center">
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
          <div className={styles.scroll}>
            <a href="#about" className={styles.scrollLink}>
              <span>Scroll Down</span>
            </a>
          </div>
        </div>
      </div>
      <Social />
    </section>
  );
};

export default Home;
