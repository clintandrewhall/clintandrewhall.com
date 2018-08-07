// @flow
import React from 'react';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.top}>
      <div className={styles.topContent}>
        <div className={styles.logo}>
          <a className={styles.logoLink} href="#0">
            <img src="/images/logo.png" alt="Homepage" />
          </a>
        </div>
        <ul className={styles.social}>
          <li>
            <a href="https://facebook.com/clint.hall">
              <i className="im im-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/clintandrewhall">
              <i className="im im-twitter" aria-hidden="true" />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/clintandrewhall">
              <i className="im im-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/clintandrewhall">
              <i className="im im-github" aria-hidden="true" />
              <span>Github</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.bottom}>
      <div>
        <div className={styles.copyright}>
          <span>© Copyright Clint Andrew Hall 2018</span>
          <span>
            Design by <a href="https://www.styleshout.com/">styleshout</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
