import { Layout, type SectionProps } from '@components/layout';
import { PortfolioGrid, usePortfolioItems } from '@components/portfolio';

import styles from './portfolio_list.styles';

const attributes = {
  id: 'portfolio',
  name: 'Portfolio',
  title: 'Explore My Projects',
  subtitle: "Here are a few things I've worked on in my spare time.",
};

const Component = () => {
  const items = usePortfolioItems();

  return (
    <PortfolioList.Root>
      <PortfolioList.Header />
      <PortfolioGrid {...styles.list}>{items}</PortfolioGrid>
    </PortfolioList.Root>
  );
};

export const PortfolioList = Object.assign(Component, {
  Header: () => <Layout.Section.Header {...attributes} />,
  Root: ({ children }: Pick<SectionProps, 'children'>) => (
    <Layout.Section id="portfolio">{children}</Layout.Section>
  ),
});
