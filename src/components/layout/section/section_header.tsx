import { cx } from '@lib/css';

import { SectionDivider } from './section_divider';

import styles from './section_header.styles';

export interface SectionHeaderProps {
  name: string;
  className?: string;
  title?: string | null;
  subtitle?: string;
  noDivider?: boolean;
}

export const SectionHeader = ({
  name,
  title: titleText,
  subtitle: subtitleText,
  noDivider = false,
  className,
}: SectionHeaderProps) => {
  const subtitle =
    subtitleText && subtitleText.length > 0 ? <p {...styles.subtitle}>{subtitleText}</p> : null;

  const title = titleText && titleText.length > 0 ? <h3 {...styles.title}>{titleText}</h3> : null;

  return (
    <>
      <header {...cx(styles.root, className)}>
        <h2 {...styles.name}>{name}</h2>
        {title}
        {subtitle}
      </header>
      {name && subtitle && !noDivider ? <SectionDivider /> : null}
    </>
  );
};
