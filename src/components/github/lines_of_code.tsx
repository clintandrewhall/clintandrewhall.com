import numeral from 'numeral';

import { languageColors } from '../../lib';
import styles from './lines_of_code.module.css';

export type Props = {
  loc: LinesOfCode[] | null;
};

export const GithubLinesOfCode = ({ loc }: Props) => {
  if (!loc) {
    return null;
  }

  let overallTotal = 0;
  let otherTotal = 0;

  loc.forEach((language) => {
    overallTotal += language.totalLines;
  });

  const items = loc
    .map((item) => {
      const { languageName, totalLines } = item;
      const percent = (totalLines / overallTotal) * 100;

      if (percent < 1) {
        otherTotal += totalLines;
        return null;
      }

      const color = languageColors[languageName] || 'inherit';

      return (
        <li
          className={styles.language}
          key={`lang_${languageName}`}
          style={{ color }}>
          <div
            className={styles.progress}
            style={{
              background: color,
              width: `${percent}%`,
            }}
          />
          <span className={styles.loc}>{numeral(totalLines).format('0a')}</span>
          <span className={styles.languageName}>{languageName}</span>
        </li>
      );
    })
    .slice(0, otherTotal > 0 ? 9 : 10);

  if (otherTotal > 0) {
    const percent = (otherTotal / overallTotal) * 100;
    items.push(
      <li className={styles.language} key="other">
        <div
          className={styles.progress}
          style={{
            width: `${percent}%`,
          }}
        />
        <span className={styles.loc}>{numeral(otherTotal).format('0a')}</span>
        <span className={styles.languageName}>Other</span>
      </li>,
    );
  }

  if (items.length > 0) {
    return (
      <ul className={styles.languages} key="languages">
        {items}
      </ul>
    );
  }

  return null;
};
