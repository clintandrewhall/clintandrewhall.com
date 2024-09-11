import { Section } from '@/components/layout';
import { PortfolioGrid } from '@/components/portfolio';

import styles from './portfolio.styles';

const attributes = {
  id: 'portfolio',
  name: 'Portfolio',
  title: 'Explore My Projects',
  subtitle: "Here are a few things I've worked on in my spare time.",
};

export const Portfolio = () => {
  return (
    <Section {...attributes} {...styles.root}>
      <Section.Header {...attributes} {...styles.header} />
      <Section.Divider />
      <div {...styles.content}>
        <PortfolioGrid />
      </div>
      <Section.Link href="/portfolio" title="View my portfolio" />
    </Section>
  );
};
