// @flow

import React from 'react';

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
                  on the Mobile Core Web team. I worked on a number of reusable
                  components in XHP. I then joined the Accessibility team to
                  help make Facebook more useful to everyone on the web.
                </p>
                <p>
                  After several hackathons involving Events, I joined the team
                  full time to rewrite the web experiences on both the mobile
                  and main website.
                </p>
                <p>
                  I then spent some time with the Platform team, reworking a
                  number of different web flows, such as OAuth, and embeddable
                  components like Share, Hashtags and Topics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.timeline}>
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
                <p>
                  I was incredibly fortunate to have some time to do a lot of
                  research into newer web technologies for appropriateness in
                  the ecosystem, (e.g. mobile portability, PhoneGap, Node). I
                  hacked on a lot of prototypes...!
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.cerner} />
              <div className={styles.header}>
                <p className={styles.timeframe}>March 2007 - October 2009</p>
                <h4 className={styles.itemTitle}>Cerner Corporation</h4>
                <h5 className={styles.itemSubtitle}>Software Architect</h5>
              </div>
              <div className={styles.desc}>
                <p>
                  As a Software Architect I was responsible for rapid
                  prototyping of HTML code based on intricate visual designs. I
                  would then deliver these to clients, stakeholders, usability
                  researchers and, eventually, engineers.
                </p>
                <p>
                  At the same time, I was responsible for visual designers'
                  understanding of "what's possible", and experimenting to push
                  the boundaries of that definition.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.cerner} />
              <div className={styles.header}>
                <p className={styles.timeframe}>January 2005 - March 2007</p>
                <h4 className={styles.itemTitle}>Cerner Corporation</h4>
                <h5 className={styles.itemSubtitle}>
                  Senior Software Engineer
                </h5>
              </div>
              <div className={styles.desc}>
                <p>
                  As a Sr. Software Engineer, I served as the
                  "Presentation-layer Architect" over the ePrescribing (eRx) and
                  Community Health Record (CHR) solutions for the treatment of
                  entire Medicare populations in several states.
                </p>
                <p>
                  It was my job to interpret raw functional requirements against
                  visual designs to create a coherent, technologically-feasible
                  user interface. I spent a lot of time building (proprietary)
                  Java Components, using Struts, Ajax, Javascript, CSS, semantic
                  HTML and cross-browser compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
