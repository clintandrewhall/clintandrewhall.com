import { Layout } from '@components/layout';
import { attributes } from '@content/about.md';
import { useHomeTopic } from '@lib/hooks';

import { Code } from './code';
import { Summary } from './summary';
import { Work } from './work';

import styles from './about.styles';

const Component = () => {
  const { ref } = useHomeTopic('about');

  return (
    <Layout.Section {...{ ref, ...attributes }}>
      <Layout.Section.Header {...attributes} {...styles.header} />
      <About.Summary />
      <Layout.Section.Divider />
      <About.Work />
      <About.Code />
    </Layout.Section>
  );
};

export const About = Object.assign(Component, {
  Code,
  Summary,
  Work,
});
