import { forwardRef } from 'react';

import { Social } from './Social';

import styles from './Hero.module.css';

export const Hero = forwardRef<HTMLElement>((_props, ref) => (
  <section id="home" className={styles.root} ref={ref}>
    <div className={styles.overlay} />
    <div className={styles.shadowOverlay} />
    <div className={styles.content}>
      <div className={styles.main}>
        <h2 className={styles.greeting}>Hello There...!</h2>
        <h1 className={styles.intro}>
          I&apos;m Clint Andrew Hall. <br />
          I&apos;m a Technical Lead <br />
          and User Interface Engineer.
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
));
