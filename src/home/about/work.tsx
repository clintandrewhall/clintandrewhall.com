import Markdown from 'react-markdown';

import { useResume } from '@lib/hooks';

import styles from './about.styles';

export const Work = () => {
  const resume = useResume();

  if (!resume?.basics?.summary) {
    return null;
  }

  return (
    <section {...styles.work}>
      <h3 {...styles.title}>About My Work</h3>
      <Markdown {...styles.content}>{resume.basics.summary}</Markdown>
    </section>
  );
};
