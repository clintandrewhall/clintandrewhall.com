import numeral from 'numeral';

import { languageColors } from '@lib/github_language_colors';

import styles from './loc_language.styles';

export const Language = ({ loc, overallTotal }: { loc: LinesOfCode; overallTotal: number }) => {
  const { languageName, totalLines, byProject } = loc;
  const color = languageColors[languageName] || 'inherit';
  const percent = numeral(totalLines / overallTotal).format('0%');
  const repoCount = Object.keys(byProject).length;

  return (
    <div {...styles.root}>
      <h4 {...styles.header}>{languageName}</h4>
      <dl {...styles.definition}>
        <dt>Lines of code</dt>
        <dd {...styles.totalLines(percent)}>{numeral(totalLines).format('0a')}</dd>
        <dt>Percentage</dt>
        <dd {...styles.percent(percent, color)}>{percent}</dd>
        <dt>Number of Repos</dt>
        <dd {...styles.repoCount}>{repoCount}</dd>
      </dl>
    </div>
  );
};
