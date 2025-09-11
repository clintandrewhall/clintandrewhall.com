const numberCompact = new Intl.NumberFormat('en', { notation: 'compact' });
const percentFmt = new Intl.NumberFormat('en', { style: 'percent', maximumFractionDigits: 0 });

import { languageColors } from '@lib/github_language_colors';

import styles from './loc_language.styles';

export const Language = ({ loc, overallTotal }: { loc: LinesOfCode; overallTotal: number }) => {
  const { languageName, totalLines, byProject } = loc;
  const color = languageColors[languageName] || 'inherit';
  const percent = percentFmt.format(totalLines / overallTotal);
  const repoCount = Object.keys(byProject).length;

  return (
    <div {...styles.root}>
      <h4 {...styles.header}>{languageName}</h4>
      <dl {...styles.definition}>
        <dt>Lines of code</dt>
        <dd {...styles.totalLines(percent)}>{numberCompact.format(totalLines)}</dd>
        <dt>Percentage</dt>
        <dd {...styles.percent(percent, color)}>{percent}</dd>
        <dt>Number of Repos</dt>
        <dd {...styles.repoCount}>{repoCount}</dd>
      </dl>
    </div>
  );
};
