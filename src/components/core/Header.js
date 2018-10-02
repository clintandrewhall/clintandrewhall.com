// @flow

import React from 'react';
import classNames from 'classnames';
import smoothscroll from 'smoothscroll';
import { SlideToggle } from 'react-slide-toggle';
import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink.js';
import GithubCorner from './../Home/Github/GithubCorner';
import styles from './Header.module.css';
import linkStyles from './HeaderLink.module.css';

type Props = {
  home: boolean,
  triggerHeight: number,
};

type State = {
  offset: boolean,
  scrolling: boolean,
  sticky: boolean,
};

const OFFSET_LIMIT = -1;
const SCROLLING_LIMIT = -1;

function handleClick(
  isHome: boolean,
  to: string,
  toggleState: string,
  onToggle: Function,
) {
  if (!isHome) {
    return false;
  }
  const element = document.getElementById(to);
  if (element) {
    smoothscroll(element);
  }
  toggleState === 'EXPANDED' && onToggle();
  return false;
}

class Header extends React.Component<Props, State> {
  static defaultProps = {
    home: false,
    triggerHeight: 100,
  };

  state: State = {
    offset: false,
    scrolling: false,
    sticky: false,
  };

  componentDidMount() {
    this._scrollHandler = this._handleScroll.bind(this);
    window.addEventListener('scroll', this._scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._scrollHandler);
    this._scrollHandler = null;
  }

  _scrollHandler = null;
  toggleButton = React.createRef();

  _handleScroll() {
    const loc = window.scrollY;
    const { triggerHeight } = this.props;

    if (loc > triggerHeight - 1) {
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
          <Link to={'/'}>
            <img src="/images/logo.png" alt="Home" />
          </Link>
        </div>
        <SlideToggle
          collapsed
          duration={1000}
          render={({ onToggle, setCollapsibleElement, toggleState }) => (
            <div>
              <nav className={styles.headerNavWrap} ref={setCollapsibleElement}>
                <ul className={styles.headerNav}>
                  <HeaderLink
                    to={home ? '#' : '/'}
                    label="Home"
                    onClick={() =>
                      handleClick(home, 'home', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#about' : '/#about'}
                    label="About"
                    onClick={() =>
                      handleClick(home, 'about', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#portfolio' : '/portfolio'}
                    label="Portfolio"
                    onClick={() =>
                      handleClick(home, 'portfolio', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#career' : '/#career'}
                    label="Career"
                    onClick={() =>
                      handleClick(home, 'career', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#medium' : '/#medium'}
                    label="Medium"
                    role="link"
                    onClick={() =>
                      handleClick(home, 'medium', toggleState, onToggle)
                    }
                  />
                  <li className={linkStyles.headerLink}>
                    <a href="/resume">Resume</a>
                  </li>
                </ul>
              </nav>
              <a
                className={classNames({
                  [styles.headerMenuToggle]: true,
                  [styles.isClicked]: toggleState !== 'COLLAPSED',
                })}
                role="button"
                tabIndex="0"
                onClick={() => onToggle()}>
                <span>Menu</span>
              </a>
            </div>
          )}
        />
        <GithubCorner />
      </header>
    );
  }
}

export default Header;
