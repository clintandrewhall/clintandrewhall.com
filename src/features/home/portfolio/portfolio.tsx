import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PortfolioBlock } from '../../portfolio';

import styles from './portfolio.module.css';

interface Front extends PortfolioEntry {
  react?: FC;
}

export const Portfolio = () => {
  const portfolioContext = require.context(
    '../../../content/portfolio',
    true,
    /.md$/,
  );

  const entries = portfolioContext.keys().reduce((memo, fileName) => {
    const obj = portfolioContext(fileName);

    if (obj && obj.attributes && obj.react) {
      const match = fileName.match(/.\/([^.]+).*/);

      if (match) {
        memo[match[1]] = { ...obj.attributes, react: obj.react } as Front;
      }
    }
    return memo;
  }, {} as Record<string, Front>);

  const items = [...Object.values(entries)]
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((entry) => <PortfolioBlock {...entry} key={`${entry.title}`} />);

  return (
    <section className={styles.root} id="portfolio" key="root">
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>Portfolio</h2>
          <h3 className={styles.subtitle}>Explore My Projects</h3>
          <p className={styles.lead}>
            Here are a few of the things I&apos;ve worked on in my spare time.
          </p>
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className={styles.content}>{items}</div>
      </div>
      <div className={styles.buttonRow}>
        <Link
          to="/portfolio"
          title="View my portfolio"
          className={styles.button}>
          View my portfolio
        </Link>
      </div>
    </section>
  );
};
