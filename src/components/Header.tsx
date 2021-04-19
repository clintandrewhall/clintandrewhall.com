import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Collapse } from 'react-collapse';
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

export const Header = ({ home = false, triggerHeight = 100 }) => {
  const [isOffset, setIsOffset] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const clickHandler = (to: Section) => {
    if (!home) {
      return;
    }

    scroller.scrollTo(to, { smooth: true });
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
      <Collapse isOpened={isOpened}>
        <div>
          <nav className={styles.headerNavWrap}>
            <ul className={styles.headerNav}>
              <HeaderLink
                to={home ? '#' : '/'}
                label="Home"
                onClick={() => clickHandler('home')}
              />
              <HeaderLink
                to={home ? '#about' : '/#about'}
                label="About"
                onClick={() => clickHandler('about')}
              />
              <HeaderLink
                to={home ? '#portfolio' : '/portfolio'}
                label="Portfolio"
                onClick={() => clickHandler('portfolio')}
              />
              <HeaderLink
                to={home ? '#career' : '/#career'}
                label="Career"
                onClick={() => clickHandler('career')}
              />
              <HeaderLink
                to={home ? '#medium' : '/#medium'}
                label="Medium"
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
      </Collapse>
      <GithubCorner />
    </header>
  );
};
