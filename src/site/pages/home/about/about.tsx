import { forwardRef } from 'react';

import { Section } from '@components/layout';
import { attributes } from '@content/about.md';

import { Principles } from './principles';
import { Skills } from './skills';
import { Summary } from './summary';

import styles from './about.styles';

// The About section reads as one argument in three movements: WHO I am (the
// personal Summary), WHAT I believe (Principles), and WHAT I build with
// (Skills). Principles + Skills form a single bound unit — a "belief →
// vocabulary" band — set apart from the narrative above by a wider gap.
const AboutComponent = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <Section {...{ ref, ...attributes }} {...styles.root}>
      <Section.Header {...attributes} {...styles.header} />
      <About.Summary />
      <header {...styles.workHeader}>
        <p {...styles.workKicker}>How I Work</p>
        <h3 {...styles.workTitle}>Principles &amp; Proof</h3>
        <p {...styles.workSubtitle}>What I believe — and the work that backs it up.</p>
      </header>
      <div {...styles.beliefs}>
        <About.Principles />
        <About.Skills />
      </div>
    </Section>
  );
});

export const About = Object.assign(AboutComponent, {
  Principles,
  Skills,
  Summary,
});
