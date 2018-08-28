// @flow

import React from 'react';

import styles from './Social.module.css';

const Social = () => {
  return (
    <ul className={styles.social}>
      <li className={styles.socialItem}>
        <a
          className={styles.socialLink}
          href="https://www.facebook.com/clint.hall"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="im im-facebook" aria-hidden="true" />
          <span>Facebook</span>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a
          className={styles.socialLink}
          href="https://www.twitter.com/clintandrewhall"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="im im-twitter" aria-hidden="true" />
          <span>Twitter</span>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a
          className={styles.socialLink}
          href="https://www.instagram.com/clintandrewhall"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="im im-instagram" aria-hidden="true" />
          <span>Instagram</span>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a
          className={styles.socialLink}
          href="https://www.github.com/clintandrewhall"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="im im-github" aria-hidden="true" />
          <span>Github</span>
        </a>
      </li>
    </ul>
  );
};

export default Social;
