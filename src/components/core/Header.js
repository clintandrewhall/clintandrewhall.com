// @flow

import React from 'react';

import HeaderLink from './HeaderLink.js';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <a href="/">
          <img src="/images/logo.png" alt="Home" />
        </a>
      </div>
      <nav className={styles.headerNavWrap}>
        <ul className={styles.headerNav}>
          <HeaderLink to="#" label="Home" />
          <HeaderLink to="#about" label="About" />
          <HeaderLink to="#portfolio" label="Portfolio" />
          <HeaderLink to="#career" label="Career" />
          <HeaderLink to="#blog" label="Blog" />
          <HeaderLink to="#contact" label="Contact" />
        </ul>
      </nav>
      <a className={styles.headerMenuToggle} href="#0">
        <span>Menu</span>
      </a>
    </header>
  );
};

export default Header;
