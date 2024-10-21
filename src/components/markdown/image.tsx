import { usePortfolioImage } from '@lib/hooks';

import styles from './image.styles';

export const MarkdownImage = ({ id, alt, width }: MarkdownImageProps) => {
  const image = usePortfolioImage(id, width);

  if (!image) {
    return null;
  }

  const { /*height, width,*/ src } = image;

  return <img {...{ src, alt, ...styles.root(width) }} />;
};
