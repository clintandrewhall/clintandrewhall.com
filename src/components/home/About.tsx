import Markdown from 'react-markdown';

import resume from '../../_content/resume.json';
import { GithubCard } from '../github';
import styles from './About.module.css';

export const About = () => (
  <section id="about" className={styles.root}>
    <div className={styles.intro}>
      <div className={styles.introContent}>
        <h2 className={styles.title}>About Me</h2>
        <h3 className={styles.subtitle}>I Live for Experiences</h3>
        <p className={styles.lead}>
          I craft them for desktop and mobile browsers, professionally and in my
          spare time. I&apos;m incredibly fortunate that my passion became my
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
          . If I&apos;m not{' '}
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
          I'm currently the Area Lead for the{' '}
          <a href="https://github.com/orgs/elastic/teams/kibana-presentation">
            Presentation Team
          </a>{' '}
          within <a href="https://www.elastic.co/products/kibana">Kibana</a> at{' '}
          <a href="https://elastic.co">Elastic</a>, working from my home in
          Kansas City, MO.
        </p>
        <p className={styles.lead}>
          In the past, I&apos;ve worked for Facebook, Cerner, Sprint and
          Accenture, and lived in New York, Vancouver and San Francisco. So far
          we&apos;ve visited 40 countries, (and counting).
        </p>
      </div>
    </div>
    <div className={styles.columns}>
      <div className={styles.left}>
        <h3 className={styles.columnTitle}>About My Work</h3>
        <Markdown className={styles.markdown}>{resume.info.brief}</Markdown>
      </div>
      <div className={styles.right}>
        <h3 className={styles.columnTitle}>About My Code</h3>
        <GithubCard />
      </div>
    </div>
  </section>
);
