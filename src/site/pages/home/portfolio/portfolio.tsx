import { forwardRef } from 'react';

import { Section } from '@components/layout';
import { type PortfolioItemProps, usePortfolioItemProps } from '@components/portfolio';
import { usePortfolioEntryIds } from '@lib/hooks';

import { DaylightCard } from './daylight_card';

import styles from './portfolio.styles';

const attributes = {
  id: 'portfolio',
  name: 'Portfolio',
  title: 'Explore My Projects',
  subtitle: "Here are a few things I've worked on in my spare time.",
};

export const Portfolio = forwardRef<HTMLDivElement>((_props, ref) => {
  const ids = usePortfolioEntryIds();
  const items = ids
    .map(usePortfolioItemProps)
    .filter((item): item is PortfolioItemProps => item !== null)
    .slice(0, 6);

  return (
    <Section {...{ ref, ...attributes, ...styles.root }}>
      <Section.Header {...attributes} {...styles.header} />
      <div {...styles.content}>
        {items.map((item) => (
          <DaylightCard key={item.title} {...item} />
        ))}
      </div>
      <Section.Link href="/portfolio" title="View my portfolio" />
    </Section>
  );
});
