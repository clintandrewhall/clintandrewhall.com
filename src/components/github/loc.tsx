import { Language } from './loc_language';

export type Props = {
  loc: LinesOfCode[] | null;
};

export const LOC = ({ loc }: Props) => {
  if (!loc) {
    return null;
  }

  const overallTotal = loc.reduce((acc, item) => acc + item.totalLines, 0);

  const items = loc
    .filter((item) => (item.totalLines / overallTotal) * 100 > 1)
    .map((loc) => <Language key={loc.languageName} {...{ loc, overallTotal }} />);

  const otherTotal = loc
    .filter((item) => (item.totalLines / overallTotal) * 100 <= 1)
    .reduce((acc, item) => acc + item.totalLines, 0);

  if (otherTotal > 0) {
    items.push(
      <Language
        key={'Other'}
        loc={{ languageName: 'Other', totalLines: otherTotal, byProject: {} }}
        overallTotal={overallTotal}
      />,
    );
  }

  if (items.length > 0) {
    return <>{items}</>;
  }

  return null;
};
