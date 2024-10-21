import { Section } from '@components/layout';
import { attributes } from '@content/about.md';
import { useHomeTopic } from '@lib/hooks';

import { Code } from './code';
import { Summary } from './summary';
import { Work } from './work';

import styles from './about.styles';

const Component = () => {
  const { ref } = useHomeTopic('about');

  return (
    <Section {...{ ref, ...attributes }}>
      <Section.Header {...attributes} {...styles.header} />
      <About.Summary />
      <Section.Divider />
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
