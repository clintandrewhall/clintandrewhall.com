import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { HeaderLink } from './HeaderLink';
import { GithubCorner } from './github/GithubCorner';
import styles from './Header.module.css';
import linkStyles from './HeaderLink.module.css';

const OFFSET_LIMIT = -1;
const SCROLLING_LIMIT = -1;

const sections = [
  'home',
  'about',
  'portfolio',
  'career',
  'medium',
  'resume',
] as const;

type Section = typeof sections[number];

export const Header = ({
  home = false,
  triggerHeight = 100,
  selectedId = '',
}) => {
  const [isOffset, setIsOffset] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const clickHandler = (to: Section) => {
    if (!home) {
      return;
    }

    scroller.scrollTo(to, { smooth: true });
    setIsOpened(false);
  };

  const scrollHandler = () => {
    const loc = window.scrollY;
    setIsSticky(loc > triggerHeight - 1);
    setIsOffset(loc > triggerHeight + OFFSET_LIMIT);
    setIsScrolling(loc > triggerHeight + SCROLLING_LIMIT);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  });

  useEffect(() => () => {
    window.removeEventListener('scroll', scrollHandler);
  });

  return (
    <header
      className={classNames({
        [styles.header]: true,
        [styles.offset]: isOffset,
        [styles.scrolling]: isScrolling,
        [styles.sticky]: isSticky,
      })}>
      <div className={styles.headerLogo}>
        <Link to={'/'}>
          <img src="/images/logo.png" alt="Home" />
        </Link>
      </div>
      <div>
        <nav
          className={classNames({
            [styles.headerNavWrap]: true,
            [styles.headerNavOpen]: isOpened,
          })}>
          <ul className={styles.headerNav}>
            <HeaderLink
              to={home ? '#' : '/'}
              label="Home"
              selected={selectedId === ''}
              onClick={() => clickHandler('home')}
            />
            <HeaderLink
              to={home ? '#about' : '/#about'}
              label="About"
              selected={selectedId === 'about'}
              onClick={() => clickHandler('about')}
            />
            <HeaderLink
              to={home ? '#portfolio' : '/portfolio'}
              label="Portfolio"
              selected={selectedId === 'portfolio'}
              onClick={() => clickHandler('portfolio')}
            />
            <HeaderLink
              to={home ? '#career' : '/#career'}
              label="Career"
              selected={selectedId === 'career'}
              onClick={() => clickHandler('career')}
            />
            <HeaderLink
              to={home ? '#medium' : '/#medium'}
              label="Medium"
              selected={selectedId === 'medium'}
              onClick={() => clickHandler('medium')}
            />
            <li className={linkStyles.headerLink}>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </nav>
        <button
          className={classNames({
            [styles.headerMenuToggle]: true,
            [styles.isClicked]: isOpened,
          })}
          tabIndex={0}
          onClick={() => setIsOpened(!isOpened)}>
          <span>Menu</span>
        </button>
      </div>
      <GithubCorner />
    </header>
  );
};
