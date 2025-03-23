import { forwardRef } from 'react';

import { Section } from '@components/layout';
import { attributes } from '@content/about.md';

import { Code } from './code';
import { Summary } from './summary';
import { Work } from './work';

import styles from './about.styles';

const AboutComponent = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <Section {...{ ref, ...attributes }} {...styles.root}>
      <Section.Header {...attributes} {...styles.header} />
      <About.Summary />
      <About.Work />
      <About.Code />
    </Section>
  );
});

export const About = Object.assign(AboutComponent, {
  Code,
  Summary,
  Work,
});
