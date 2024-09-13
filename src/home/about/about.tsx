import { Section } from '@components/layout';
import { attributes } from '@content/about.md';

import { Code } from './code';
import { Summary } from './summary';
import { Work } from './work';

import styles from './about.styles';

const Component = () => {
  return (
    <Section {...attributes}>
      <Section.Header {...attributes} {...styles.header} />
      <About.Summary />
      <About.Work />
      <About.Code />
    </Section>
  );
};

export const About = Object.assign(Component, {
  Code,
  Summary,
  Work,
});
