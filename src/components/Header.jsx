// @flow

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <a href="/">
          <img src="images/logo.png" alt="Home" />
        </a>
      </div>
      <nav className={styles.headerNavWrap}>
        <ul className={styles.headerNav}>
          <li className={styles.current}>
            <a className="smoothscroll" href="#home" title="home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about" title="about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#works" title="works">
              Portfolio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#blog" title="blog">
              Articles
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact" title="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a className={styles.headerMenuToggle} href="#0">
        <span>Menu</span>
      </a>
    </header>
  );
};

export default Header;
