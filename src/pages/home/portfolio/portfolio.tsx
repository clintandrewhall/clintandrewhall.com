import { Section } from '@components/layout';
import {
  PortfolioGrid,
  type PortfolioItemProps,
  usePortfolioItemProps,
} from '@components/portfolio';
import { useEntryIds, useHomeTopic } from '@lib/hooks';

import styles from './portfolio.styles';

const attributes = {
  id: 'portfolio',
  name: 'Portfolio',
  title: 'Explore My Projects',
  subtitle: "Here are a few things I've worked on in my spare time.",
};

export const Portfolio = () => {
  const { ref } = useHomeTopic('portfolio');
  const ids = useEntryIds();
  const entries = ids
    .map(usePortfolioItemProps)
    .filter<PortfolioItemProps>((entry) => entry !== null)
    .map((entry) => <PortfolioGrid.Item key={entry.title} {...entry} />);

  return (
    <Section {...{ ref, ...attributes, ...styles.root }}>
      <Section.Header {...attributes} {...styles.header} />
      <div {...styles.content}>
        <PortfolioGrid>{entries}</PortfolioGrid>
      </div>
      <Section.Link href="/portfolio" title="View my portfolio" />
    </Section>
  );
};
