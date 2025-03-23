import { forwardRef } from 'react';

import { Section } from '@components/layout';
import { PortfolioGrid, usePortfolioItems } from '@components/portfolio';

import styles from './portfolio.styles';

const attributes = {
  id: 'portfolio',
  name: 'Portfolio',
  title: 'Explore My Projects',
  subtitle: "Here are a few things I've worked on in my spare time.",
};

export const Portfolio = forwardRef<HTMLDivElement>((_props, ref) => {
  const items = usePortfolioItems();

  return (
    <Section {...{ ref, ...attributes, ...styles.root }}>
      <Section.Header {...attributes} {...styles.header} />
      <div {...styles.content}>
        <PortfolioGrid>{items.slice(0, 6)}</PortfolioGrid>
      </div>
      <Section.Link href="/portfolio" title="View my portfolio" />
    </Section>
  );
});
