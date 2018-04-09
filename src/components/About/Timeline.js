// @flow

import React from 'react';

import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <section className={styles.root}>
      <header className={styles.heading}>
        <h3>About My Recent Experience</h3>
      </header>
      <div className={styles.left}>
        <div className={styles.timeline}>
          <div className={styles.block}>
            <div className={styles.bullet} />
            <div className={styles.header}>
              <p className={styles.timeframe}>July 2015 - Present</p>
              <h3>Awesome Studio</h3>
              <h5>Lead Designer</h5>
            </div>
            <div className={styles.desc}>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.bullet} />
            <div className={styles.header}>
              <p className={styles.timeframe}>July 2014 - June 2015</p>
              <h3>Super Cool Agency</h3>
              <h5>Front-end Developer</h5>
            </div>
            <div className={styles.desc}>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.timeline}>
          <div className={styles.block}>
            <div className={styles.bullet} />
            <div className={styles.header}>
              <p className={styles.timeframe}>July 2012 - June 2014</p>
              <h3>Great Design Studio</h3>
              <h5>Web Designer</h5>
            </div>
            <div className={styles.desc}>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.bullet} />
            <div className={styles.header}>
              <p className={styles.timeframe}>July 2011 - June 2012</p>
              <h3>Epic Design Agency</h3>
              <h5>Web Designer</h5>
            </div>
            <div className={styles.desc}>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
