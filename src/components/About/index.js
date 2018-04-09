// @flow

import React from 'react';

import GithubCard from './Github';
import Timeline from './Timeline.js';
import styles from './index.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>About Me</h2>
          <h3 className={styles.subtitle}>I Love to Create Things</h3>
          <p className={styles.lead}>
            I'm a User Interface Engineer at Facebook, building new experiences
            for desktop and mobile browsers. I love my work.
          </p>
          <p className={styles.lead}>
            I enjoy conferences like{' '}
            <a href="http://sxsw.com/" rel="external">
              SxSW
            </a>, gatherings like TED and TEDx, and hacks like{' '}
            <a href="http://kansascity.startupweekend.org/" rel="external">
              Startup Weekend
            </a>. I love to build with Lego. I made my own desk. I tinker with
            hardware and VR. You can occasionally find me onstage in local
            community theatre.
          </p>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.left}>
          <h2 className={styles.columnTitle}>About My Work</h2>
          <p>
            I want to make the web “beautiful”, both on the surface and beneath
            it. If I have a suggestion for a website or application, I prefer to
            demonstrate the idea through an API rather than write a blog
            proposing it.
          </p>
          <p>
            I draw a distinction between “web sites” and “web applications”,
            touting a strict progressive enhancement philosophy in the former,
            (e.g. “the web is HTML”), and responsible use of front-end tech in
            the latter, (focusing on performance, avoiding library bloat).
          </p>
          <p>
            I’m comfortable with varying levels of skill in any web stack,
            having written and maintained code in Ruby on Rails, PHP, and Java.
            I currently prefer Node for most of my personal projects, as I find
            I can get them up and running very quickly; I also love the very
            active community.
          </p>
          <p>
            I want to work in a “two-way street” environment, where I learn as
            much as I contribute. I look for opportunities where I can make a
            strong, direct and meaningful contribution to a team and to the web.
            I strive to take the mysticism out of my profession, encouraging
            anyone and everyone that creating things on the web was meant for
            them, too.
          </p>
        </div>
        <div className={styles.right}>
          <h2 className={styles.columnTitle}>About My Code</h2>
          <GithubCard />
        </div>
      </div>
      <Timeline />
    </section>
  );
};

export default About;
