// @flow

import React from 'react';
import classnames from 'classnames';

import Social from './Social.jsx';

import styles from './Home.module.css';
import gridStyles from './common/Grid.module.css';
import buttonStyles from './common/Buttons.module.css';

const Home = () => {
  return (
    <section
      id="home"
      className={classnames(styles.home, 'page-hero', 'target-section')}
      data-parallax="scroll"
      data-image-src="images/hero-two.jpg"
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center">
      <div className={styles.overlay} />
      <div className={styles.shadowOverlay} />
      <div className={styles.content}>
        <div className={classnames(gridStyles.row, styles.main)}>
          <h3 className={styles.greeting}>Hello There</h3>
          <h1 className={styles.intro}>
            I'm Clint Andrew Hall...! <br />
            I'm a User Interface Engineer <br />
            and Socially Adept Geek.
          </h1>
          <div className={styles.buttons}>
            <a
              href="#portfolio"
              className={classnames(
                buttonStyles.button,
                buttonStyles.stroke,
                styles.button,
                'smoothscroll',
              )}>
              Latest Projects
            </a>
            <a
              href="#about"
              className={classnames(
                buttonStyles.button,
                buttonStyles.stroke,
                styles.button,
                'smoothscroll',
              )}>
              More About Me
            </a>
          </div>
          <div className={styles.scroll}>
            <a
              href="#about"
              className={classnames(styles.scrollLink, 'smoothscroll')}>
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
