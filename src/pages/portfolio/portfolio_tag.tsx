import { NotFound } from '@pages/not_found';

import { Layout, Section } from '@components/layout';
import { PortfolioGrid, usePortfolioItemProps } from '@components/portfolio';

import styles from './portfolio_tag.styles';

export interface PortfolioTagProps {
  articles?: PortfolioEntryImport[];
  tag?: PortfolioTag | null;
}

const Header = () => <Layout.Header background="opaque" selectedId="portfolio" />;

const Component = ({ articles = [], tag }: PortfolioTagProps) => {
  const TagItem = ({ attributes }: { attributes: PortfolioEntryAttributes }) => {
    const { id } = attributes;
    const props = usePortfolioItemProps(id);

    if (!props) {
      return null;
    }

    return <PortfolioGrid.Item key={id} {...props} />;
  };

  const items = articles.map((article) => <TagItem key={article.attributes.id} {...article} />);

  if (!tag || !articles.length) {
    return <NotFound />;
  }

  const attributes = {
    id: 'portfolio',
    name: 'Portfolio',
    title: tag.name,
    subtitle: `Portfolio entries tagged with ${tag.name}`,
  };

  return (
    <>
      <PortfolioTag.Header />
      <Section id="portfolio">
        <Section.Header {...attributes} />
        <PortfolioGrid {...styles.list}>{items}</PortfolioGrid>

        <Section.Link href="/portfolio" title="View my portfolio" />
      </Section>
      <PortfolioTag.Footer />
    </>
  );
};

export const PortfolioTag = Object.assign(Component, {
  Header,
  Footer: Layout.Footer,
});
