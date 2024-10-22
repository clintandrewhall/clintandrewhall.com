import moment from 'moment';
import { Link } from 'react-router-dom';

import { Layout } from '@components/layout';
import { useArticleImage } from '@lib/hooks';

import styles from './article_header.styles';

export type ArticleHeaderProps = ArticleAttributes;

export const ArticleHeader = ({
  caption: subtitle,
  cover,
  name: title,
  tags: tagsProp,
  timestamp,
}: ArticleHeaderProps) => {
  const largeImage = useArticleImage(cover);
  const mediumImage = useArticleImage(cover, 'medium');
  const smallImage = useArticleImage(cover, 'small');
  const image = largeImage ?? mediumImage ?? smallImage;

  const tags = tagsProp.map((tag) => ({ label: tag.name, href: `/portfolio/tag/${tag.slug}` }));

  const tagList = (tags || []).map((tag, index) => (
    <Link {...styles.tag} to={tag.href} key={tag.label}>
      {tag.label + (index < tags.length - 1 ? ', ' : '')}
    </Link>
  ));

  const date = moment(timestamp * 1000).format('MMMM, Do, YYYY');

  return (
    <header {...styles.root(image)}>
      <Layout>
        <h1 {...styles.title}>{title}</h1>
        <h2 {...styles.subtitle}>{subtitle}</h2>
        <p {...styles.date}>{date}</p>
        <ul {...styles.tagList}>{tagList}</ul>
      </Layout>
    </header>
  );
};
