// @flow

import React from 'react';
import Markdown from 'react-markdown';

import resume from './../../_content/resume.json';
import GithubCard from './Github';
import styles from './About.module.css';

const About = () => {
  const { info } = (resume: FreshResume);
  const { brief } = info;

  return (
    <section id="about" className={styles.root}>
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>About Me</h2>
          <h3 className={styles.subtitle}>I Live for Experiences</h3>
          <p className={styles.lead}>
            I craft them for desktop and mobile browsers, professionally and in
            my spare time. I'm incredibly fortunate that my passion became my
            career.
          </p>
          <p className={styles.lead}>
            I pursue them, too. I enjoy conferences like{' '}
            <a href="http://sxsw.com/" rel="external">
              SxSW
            </a>
            , gatherings like{' '}
            <a href="https://www.ted.com/" rel="external">
              TED
            </a>{' '}
            and{' '}
            <a href="http://tedxrenfrewcollingwood.com/" rel="external">
              TEDx
            </a>
            , and hackathons like{' '}
            <a href="http://kansascity.startupweekend.org/" rel="external">
              Startup Weekend
            </a>
            . I love to{' '}
            <a href="https://www.instagram.com/p/Bggec_FA6m0/" rel="external">
              build
            </a>{' '}
            with Lego. I made my own{' '}
            <a href="https://www.instagram.com/p/qOJJTcFmOr/" rel="external">
              desk
            </a>
            . I tinker with{' '}
            <a href="https://www.instagram.com/p/uMRGZVlmDx/" rel="external">
              hardware
            </a>{' '}
            and{' '}
            <a href="https://www.instagram.com/p/BMhqanBBoGD/" rel="external">
              VR
            </a>
            . If I'm not{' '}
            <a href="https://www.instagram.com/p/BGLyaiZFmFg" rel="external">
              traveling the world
            </a>{' '}
            with my wife,{' '}
            <a href="https://www.instagram.com/p/3pb4fslmN-/" rel="external">
              Olivia
            </a>
            , you might find me{' '}
            <a href="https://www.instagram.com/p/Rl_ij5lmOc/" rel="external">
              onstage
            </a>{' '}
            in community theatre, or{' '}
            <a href="https://www.instagram.com/p/BX80pE0BmcO/" rel="external">
              telling a story
            </a>{' '}
            at{' '}
            <a href="http://themoth.org" rel="external">
              The Moth
            </a>
            . We have an adorable dog named{' '}
            <a href="https://www.instagram.com/p/BEiS6_6FmAH/" rel="external">
              Shandy
            </a>
            .
          </p>
          <p className={styles.lead}>
            I've worked for Facebook, Cerner, Sprint and Accenture, and I've
            lived in Kansas City, New York, Vancouver and San Francisco. I've
            visited 39 countries, (and counting).
          </p>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.left}>
          <h3 className={styles.columnTitle}>About My Work</h3>
          <Markdown source={brief} className={styles.markdown} />
        </div>
        <div className={styles.right}>
          <h3 className={styles.columnTitle}>About My Code</h3>
          <GithubCard />
        </div>
      </div>
    </section>
  );
};

export default About;
