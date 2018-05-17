// @flow

import React from 'react';

import GithubCard from './Github';
import styles from './index.module.css';

const About = () => {
  return (
    <section id="about" className={styles.root}>
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>About Me</h2>
          <h3 className={styles.subtitle}>I Live for Experiences</h3>
          <p className={styles.lead}>
            I build them for desktop and mobile browsers, professionally and in
            my spare time. I'm incredibly fortunate that my passion became my
            career.
          </p>
          <p className={styles.lead}>
            I pursue them, too. I enjoy conferences like{' '}
            <a href="http://sxsw.com/" rel="external">
              SxSW
            </a>, gatherings like{' '}
            <a href="https://www.ted.com/" rel="external">
              TED
            </a>{' '}
            and{' '}
            <a href="http://tedxrenfrewcollingwood.com/" rel="external">
              TEDx
            </a>, and hackathons like{' '}
            <a href="http://kansascity.startupweekend.org/" rel="external">
              Startup Weekend
            </a>. I love to{' '}
            <a href="https://www.instagram.com/p/Bggec_FA6m0/" rel="external">
              build
            </a>{' '}
            with Lego. I made my own{' '}
            <a href="https://www.instagram.com/p/qOJJTcFmOr/" rel="external">
              desk
            </a>. I tinker with{' '}
            <a href="https://www.instagram.com/p/uMRGZVlmDx/" rel="external">
              hardware
            </a>{' '}
            and{' '}
            <a href="https://www.instagram.com/p/BMhqanBBoGD/" rel="external">
              VR
            </a>. If I'm not{' '}
            <a href="https://www.instagram.com/p/BGLyaiZFmFg" rel="external">
              traveling the world
            </a>{' '}
            with my wife,{' '}
            <a href="https://www.instagram.com/p/3pb4fslmN-/" rel="external">
              Olivia
            </a>, you might find me{' '}
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
            </a>. We have an adorable dog named{' '}
            <a href="https://www.instagram.com/p/BEiS6_6FmAH/" rel="external">
              Shandy
            </a>.
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
          <p>
            I want to make the web “beautiful”, both on the surface and beneath
            it. If I have a suggestion for a website or application, I prefer to
            demonstrate the idea through an API rather than write a blog about
            it.
          </p>
          <p>
            I draw a distinction between “web sites” and “web applications”,
            touting a strict progressive enhancement philosophy in the former,
            (e.g. “the web is HTML”), and responsible use of front-end tech in
            the latter, (focus on performance, avoid library bloat,
            accessibility, etc).
          </p>
          <p>
            I’m comfortable with varying levels of skill in just about any web
            stack, having written and maintained code in PHP, Java and Ruby on
            Rails. I currently prefer Node for most of my personal projects, as
            I find I can get them up and running very quickly; I also love the
            very active community.
          </p>
          <p>
            I look for opportunities in “two-way street” environments, where I
            learn from others while making strong, direct and meaningful
            contributions to a team and impact on the web. I strive to take the
            mysticism out of my profession, encouraging anyone and everyone that
            creating things on the web was meant for them, too.
          </p>
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
