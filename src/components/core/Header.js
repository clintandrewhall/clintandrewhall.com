// @flow

import React from 'react';

import HeaderLink from './HeaderLink.js';
import styles from './Header.module.css';

type Props = {
  home?: boolean,
};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <a href="/">
          <img src="/images/logo.png" alt="Home" />
        </a>
      </div>
      <nav className={styles.headerNavWrap}>
        <ul className={styles.headerNav}>
          <HeaderLink to={props.home ? '#' : '/'} label="Home" />
          <HeaderLink to={props.home ? '#about' : '/#about'} label="About" />
          <HeaderLink to={props.home ? '#portfolio' : '/portfolio'} label="Portfolio" />
          <HeaderLink to={props.home ? '#career' : '/#career'} label="Career" />
          <HeaderLink to={props.home ? '#blog' : '/#blog'} label="Blog" />
          <HeaderLink to={props.home ? '#contact' : '/#contact'} label="Contact" />
        </ul>
      </nav>
      <a className={styles.headerMenuToggle} href="#0">
        <span>Menu</span>
      </a>
    </header>
  );
};

export default Header;
