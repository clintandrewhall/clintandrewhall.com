// @flow

import React from 'react';
import classNames from 'classnames';

import HeaderLink from './HeaderLink.js';
import styles from './Header.module.css';

type Props = {
  home?: boolean,
  triggerHeight?: number,
};

type State = {
  offset: boolean,
  scrolling: boolean,
  sticky: boolean,
};

const OFFSET_LIMIT = 0;
const SCROLLING_LIMIT = 0;

class Header extends React.Component<Props, State> {
  state: State = {
    offset: false,
    scrolling: false,
    sticky: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => this._handleScroll(), {
      passive: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this._handleScroll());
  }

  _handleScroll() {
    const loc = window.scrollY;
    const { triggerHeight } = this.props;

    if (loc > triggerHeight) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }

    if (loc > triggerHeight + OFFSET_LIMIT) {
      this.setState({ offset: true });
    } else {
      this.setState({ offset: false });
    }

    if (loc > triggerHeight + SCROLLING_LIMIT) {
      this.setState({ scrolling: true });
    } else {
      this.setState({ scrolling: false });
    }
  }

  render() {
    const { home } = this.props;
    const { offset, scrolling, sticky } = this.state;
    return (
      <header
        className={classNames({
          [styles.header]: true,
          [styles.offset]: offset,
          [styles.scrolling]: scrolling,
          [styles.sticky]: sticky,
        })}>
        <div className={styles.headerLogo}>
          <a href="/">
            <img src="/images/logo.png" alt="Home" />
          </a>
        </div>
        <nav className={styles.headerNavWrap}>
          <ul className={styles.headerNav}>
            <HeaderLink to={home ? '#' : '/'} label="Home" />
            <HeaderLink to={home ? '#about' : '/#about'} label="About" />
            <HeaderLink
              to={home ? '#portfolio' : '/portfolio'}
              label="Portfolio"
            />
            <HeaderLink to={home ? '#career' : '/#career'} label="Career" />
            <HeaderLink to={home ? '#blog' : '/#blog'} label="Blog" />
            <HeaderLink to={home ? '#contact' : '/#contact'} label="Contact" />
          </ul>
        </nav>
        <a className={styles.headerMenuToggle} href="#0">
          <span>Menu</span>
        </a>
      </header>
    );
  }
}

export default Header;
