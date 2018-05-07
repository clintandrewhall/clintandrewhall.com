// @flow

import React from 'react';
import classNames from 'classnames';
import smoothscroll from 'smoothscroll';
import { SlideToggle } from 'react-slide-toggle';

import HeaderLink from './HeaderLink.js';
import styles from './Header.module.css';

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

class Header extends React.Component<Props, State> {
  toggleButton = React.createRef();
  _scrollHandler = null;

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

  _handleClick(
    isHome: boolean,
    to: string,
    toggleState: string,
    onToggle: Function,
  ) {
    if (!isHome) {
      return;
    }
    const element = document.getElementById(to);
    if (element) {
      smoothscroll(element);
    }
    toggleState === 'EXPANDED' && onToggle();
    return false;
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
        <SlideToggle
          collapsed={true}
          duration={1000}
          render={({
            onToggle,
            setCollapsibleElement,
            toggleState,
            isMoving,
          }) => (
            <div>
              <nav className={styles.headerNavWrap} ref={setCollapsibleElement}>
                <ul className={styles.headerNav}>
                  <HeaderLink
                    to={home ? '#' : '/'}
                    label="Home"
                    onClick={() =>
                      this._handleClick(home, 'home', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#about' : '/#about'}
                    label="About"
                    onClick={() =>
                      this._handleClick(home, 'about', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#portfolio' : '/portfolio'}
                    label="Portfolio"
                    onClick={() =>
                      this._handleClick(
                        home,
                        'portfolio',
                        toggleState,
                        onToggle,
                      )
                    }
                  />
                  <HeaderLink
                    to={home ? '#career' : '/#career'}
                    label="Career"
                    onClick={() =>
                      this._handleClick(home, 'career', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#blog' : '/#blog'}
                    label="Blog"
                    onClick={() =>
                      this._handleClick(home, 'blog', toggleState, onToggle)
                    }
                  />
                  <HeaderLink
                    to={home ? '#contact' : '/#contact'}
                    label="Contact"
                    onClick={() =>
                      this._handleClick(home, 'contact', toggleState, onToggle)
                    }
                  />
                </ul>
              </nav>
              <a
                className={classNames({
                  [styles.headerMenuToggle]: true,
                  [styles.isClicked]: toggleState !== 'COLLAPSED',
                })}
                href="#0"
                onClick={() => {
                  onToggle();
                }}>
                <span>Menu</span>
              </a>
            </div>
          )}
        />
      </header>
    );
  }
}

export default Header;
