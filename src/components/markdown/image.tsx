import { usePortfolioImage } from '@lib/hooks/use_portfolio';

import styles from './image.styles';

export const MarkdownImage = ({ id, alt, width: widthProp }: MarkdownImageProps) => {
  const image = usePortfolioImage(id, widthProp);

  if (!image) {
    return null;
  }

  const { /*height, width,*/ src } = image;

  return <img {...{ src, alt, ...styles.root }} />;
};
