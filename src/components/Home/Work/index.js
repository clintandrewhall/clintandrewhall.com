// @flow

import React from 'react';

import Testimonials from '../Testimonials/index';
import styles from './index.module.css';

const Work = () => {
  return (
    <section className={styles.root} id="career" key="root">
      <div className={styles.work}>
        <div className={styles.intro}>
          <div className={styles.introContent}>
            <h2 className={styles.title}>Career</h2>
            <h3 className={styles.subtitle}>Read About My Experience</h3>
            <p className={styles.lead}>
              These are a few roles I've held recently.
            </p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.timeline}>
            <div className={styles.block}>
              <div className={styles.fb} />
              <div className={styles.header}>
                <p className={styles.timeframe}>April 2015 - Present</p>
                <h4 className={styles.itemTitle}>Facebook NY</h4>
                <h5 className={styles.itemSubtitle}>User Interface Engineer</h5>
              </div>
              <div className={styles.desc}>
                <p>
                  I currently work out of the New York City office at Facebook.
                  When I first moved out to the Big Apple, I did a
                  hack-a-quarter on the Composer, and then worked on the Share
                  Dialog.
                </p>
                <p>
                  Eventually Events found themselves with a large number of
                  React and Relay projects, so I rejoined my former team
                  remotely. I've been with them ever since, building the new
                  Events Dashboard, Permalink, as well as other "under the hood"
                  improvements.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.fb} />
              <div className={styles.header}>
                <p className={styles.timeframe}>August 2013 - April 2015</p>
                <h4 className={styles.itemTitle}>Facebook Vancouver</h4>
                <h5 className={styles.itemSubtitle}>User Interface Engineer</h5>
              </div>
              <div className={styles.desc}>
                <p>
                  In 2013 I joined the Vancouver office with an amazing cadre of
                  engineers from all over the world. With a Canadian fiance, it
                  made sense for me to bring Facebook experience (and culture)
                  to a group of "n00bs".
                </p>
                <p>
                  While there, I worked on the Protect and Care team developing
                  a new Messaging Inbox built in React. I also implemented the
                  Open Graph Share dialog for FB Platform in XHP.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.timeline}>
            <div className={styles.block}>
              <div className={styles.fb} />
              <div className={styles.header}>
                <p className={styles.timeframe}>July 2012 - June 2014</p>
                <h4 className={styles.itemTitle}>Facebook HQ</h4>
                <h5 className={styles.itemSubtitle}>User Interface Engineer</h5>
              </div>
              <div className={styles.desc}>
                <p>
                  I joined Facebook in 2012 as a User Interface Engineer (UIE)
                  on the Mobile Core Web team.I then joined the Accessibility
                  team to help make Facebook more useful to everyone on the web.
                </p>
                <p>
                  After several hackathons involving Events, I joined the team
                  full time to rewrite the web experiences on both the mobile
                  and main website.
                </p>
                <p>
                  Afterwards, I spent some time with the Platform team,
                  reworking a number of different web flows, like OAuth, and
                  embeddable components like Share, Hashtags and Topics.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.cerner} />
              <div className={styles.header}>
                <p className={styles.timeframe}>October 2009 - January 2012</p>
                <h4 className={styles.itemTitle}>Cerner Corporation</h4>
                <h5 className={styles.itemSubtitle}>Web Evanglist</h5>
              </div>
              <div className={styles.desc}>
                <p>
                  As Cerner's Web Evanglist, I was responsible for advancing web
                  best-practices to web teams within Cerner both existing and
                  emerging. I basically served as ad-hoc advisor with respect to
                  semantics, accessibility, web agnostics and the responsible
                  use of CSS and JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Work;
