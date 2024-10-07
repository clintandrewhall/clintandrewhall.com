import { Section } from '@components/layout';
import { attributes } from '@content/about.md';

import { Code } from './code';
import { Summary } from './summary';
import { Work } from './work';

import styles from './about.styles';
import { useHomeTopic } from '../use_home_topic';

const Component = () => {
  const { ref } = useHomeTopic('about');

  return (
    <Section {...{ ref, ...attributes }}>
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
