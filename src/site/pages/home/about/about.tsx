import { forwardRef } from 'react';

import { Section, TwoColumn } from '@components/layout';
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
      <TwoColumn>
        <About.Work />
        <About.Code />
      </TwoColumn>
    </Section>
  );
});

export const About = Object.assign(AboutComponent, {
  Code,
  Summary,
  Work,
});
