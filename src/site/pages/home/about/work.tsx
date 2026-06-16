import { useResume } from '@lib/hooks';

import styles from './about.styles';

export const Work = () => {
  const resume = useResume();

  if (!resume?.basics?.summaryHtml) {
    return null;
  }

  return (
    <section {...styles.work}>
      <h3 {...styles.title}>About My Work</h3>
      <div {...styles.content} dangerouslySetInnerHTML={{ __html: resume.basics.summaryHtml }} />
    </section>
  );
};
