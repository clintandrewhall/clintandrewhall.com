import { Button } from '@components/button';

import styles from './hero_header.styles';

export const HeroHeader = () => {
  return (
    <header {...styles.root}>
      <hgroup {...styles.headerGroup}>
        <h1 {...styles.title}>
          <span {...styles.titleLine(0)}>I make the web beautiful,</span>
          <span {...styles.titleLine(1)}>on its surface and beneath.</span>
        </h1>
        <p {...styles.subtitle}>Technical Lead &amp; Senior UI Engineer</p>
      </hgroup>
      <ul {...styles.linkList}>
        <li {...styles.linkItem}>
          <Button variant="secondary" className={styles.ctaPrimary} to="/#portfolio">
            Selected work
          </Button>
        </li>
        <li {...styles.linkItem}>
          <Button variant="secondary" to="/#about">
            More about me
          </Button>
        </li>
      </ul>
    </header>
  );
};
