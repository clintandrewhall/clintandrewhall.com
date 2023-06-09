import { useRef, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { HeaderLink } from './header_link';
import { GithubCorner } from './github';

import styles from './header.module.css';
import linkStyles from './header_link.module.css';
import { sections, Section } from '../lib';

export interface Props {
  selectedId?: Section | '';
  navigation?: Navigation;
}

export const Header = ({ selectedId = '', navigation = 'local' }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setIsOpened(false);
  };

  const links = sections.map((id) => (
    <HeaderLink
      key={id}
      isSelected={selectedId === id}
      {...{ id, onClick, navigation }}
    />
  ));

  return (
    <div className={styles.root} ref={headerRef}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <Link to={'/'}>
            <img src="/images/logo.png" alt="Home" />
          </Link>
        </div>
        <nav
          className={classNames({
            [styles.headerNav]: true,
            [styles.headerNavOpen]: isOpened,
          })}>
          <ul className={styles.headerNavList}>
            {links}
            <li className={linkStyles.root}>
              <a className={linkStyles.link} href="/resume">
                Resume
              </a>
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
        <GithubCorner />
      </header>
    </div>
  );
};
