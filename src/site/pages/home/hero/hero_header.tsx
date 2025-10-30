import { Link } from 'react-router';

import styles from './hero_header.styles';

export const HeroHeader = () => {
  return (
    <header {...styles.root}>
      <hgroup {...styles.headerGroup}>
        <h1 {...styles.title}>
          I'm a Technical Lead&nbsp;
          <br />
          and User Interface Engineer.
        </h1>
        <h2 {...styles.subtitle}>
          I work to make the web beautiful,&nbsp;
          <br />
          both on its surface and beneath.
        </h2>
      </hgroup>
      <ul {...styles.linkList}>
        <li {...styles.linkItem}>
          <Link to="/#portfolio" {...styles.link}>
            Latest Projects
          </Link>
        </li>
        <li {...styles.linkItem}>
          <Link to="/#about" {...styles.link}>
            More About Me
          </Link>
        </li>
      </ul>
    </header>
  );
};
