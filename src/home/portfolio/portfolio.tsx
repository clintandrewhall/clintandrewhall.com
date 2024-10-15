import { Section } from '@components/layout';
import { PortfolioGrid, type PortfolioItemProps } from '@components/portfolio';
import { useEntryIds, useEntryMetadata, usePortfolioImage } from '@lib/hooks';
import { useHomeTopic } from '@lib/hooks';
import { type SectionId } from '@lib/site';

import styles from './portfolio.styles';

const attributes = {
  id: 'portfolio',
  name: 'Portfolio',
  title: 'Explore My Projects',
  subtitle: "Here are a few things I've worked on in my spare time.",
};

const useEntry = (id: SectionId): PortfolioItemProps | null => {
  const entry = useEntryMetadata(id);
  const image = usePortfolioImage(entry?.cover, 480);

  if (!entry || !image) {
    return null;
  }

  const { caption, name: title, tags, website } = entry;

  return {
    title,
    caption,
    href: `/portfolio/${id}`,
    imageSrc: image.src,
    tags: tags.map((tag) => ({ label: tag.name, href: `/portfolio/tag/${tag.slug}` })),
    website,
  };
};

export const Portfolio = () => {
  const { ref } = useHomeTopic('portfolio');
  const ids = useEntryIds();
  const entries = ids
    .map(useEntry)
    .filter<PortfolioItemProps>((entry) => entry !== null)
    .map((entry) => <PortfolioGrid.Item key={entry.title} {...entry} />);

  return (
    <Section {...{ ref, ...attributes, ...styles.root }}>
      <Section.Header {...attributes} {...styles.header} />
      <Section.Divider />
      <div {...styles.content}>
        <PortfolioGrid>{entries}</PortfolioGrid>
      </div>
      <Section.Link href="/portfolio" title="View my portfolio" />
    </Section>
  );
};
