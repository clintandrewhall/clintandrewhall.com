import numeral from 'numeral';

import { languageColors } from './github-language-colors';
import styles from './LOC.module.css';

export type LOCType = { name: string; loc: number };

export type Props = {
  loc: Array<LOCType>;
};

export const LOC = (props: Props) => {
  const lines = props.loc;

  if (!lines) {
    return null;
  }

  let total = 0;
  let other = 0;

  lines.forEach((language: LOCType) => {
    total += language.loc;
  });

  const items = lines
    .map((language: LOCType) => {
      const { name, loc } = language;
      const percent = (loc / total) * 100;

      if (percent < 1) {
        other += loc;
        return null;
      }

      const color = languageColors[name] || 'inherit';

      return (
        <li className={styles.language} key={`lang_${name}`} style={{ color }}>
          <div
            className={styles.progress}
            style={{
              background: color,
              width: `${percent}%`,
            }}
          />
          <span className={styles.loc}>{numeral(loc).format('0a')}</span>
          <span className={styles.languageName}>{name}</span>
        </li>
      );
    })
    .slice(0, other > 0 ? 9 : 10);

  if (other > 0) {
    const percent = (other / total) * 100;
    items.push(
      <li className={styles.language} key="other">
        <div
          className={styles.progress}
          style={{
            width: `${percent}%`,
          }}
        />
        <span className={styles.loc}>{numeral(other).format('0a')}</span>
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
