import { NotFound } from '@pages/not_found';

import { Section, type SectionHeaderProps, type SectionProps } from '@components/layout';
import { PortfolioGrid, usePortfolioItemProps } from '@components/portfolio';
import { useArticles, useArticleTag } from '@lib/hooks/use_article';

import styles from './article_tag.styles';

export interface ArticleTagProps {
  tagId?: string;
}

const Component = ({ tagId }: ArticleTagProps) => {
  const tag = useArticleTag(tagId);
  const articles = useArticles(tagId);

  const TagItem = ({ attributes }: { attributes: ArticleAttributes }) => {
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

  return (
    <ArticleTag.Root>
      <ArticleTag.Header title={tag.name} />
      <PortfolioGrid {...styles.list}>{items}</PortfolioGrid>
    </ArticleTag.Root>
  );
};

type HeaderProps = Pick<SectionHeaderProps, 'title'>;

export const ArticleTag = Object.assign(Component, {
  Header: (props: HeaderProps) => <Section.Header {...props} />,
  Root: ({ children }: Pick<SectionProps, 'children'>) => (
    <Section id="portfolio">{children}</Section>
  ),
});
