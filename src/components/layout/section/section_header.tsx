import { cx } from '@lib/css';

import { Section } from './section';

import styles from './section_header.styles';

export interface SectionHeaderProps {
  className?: string;
  name?: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({
  name: nameText,
  title: titleText,
  subtitle: subtitleText,
  className,
}: SectionHeaderProps) => {
  const name = nameText && nameText.length > 0 ? <h2 {...styles.name}>{nameText}</h2> : null;

  const subtitle =
    subtitleText && subtitleText.length > 0 ? <p {...styles.subtitle}>{subtitleText}</p> : null;

  return (
    <>
      <header {...cx(styles.root, className)}>
        {name}
        <h3 {...styles.title}>{titleText}</h3>
        {subtitle}
      </header>
      {name && subtitle ? <Section.Divider /> : null}
    </>
  );
};
