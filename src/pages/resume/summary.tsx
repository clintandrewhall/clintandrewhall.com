import { useResume } from '@lib/hooks';

import styles from './summary.styles';

export const ResumeSummary = () => {
  const resume = useResume();

  if (!resume) {
    return null;
  }

  return (
    <section id="summary" {...styles.root}>
      <h2 {...styles.title}>Personal Summary</h2>
      {resume.basics.summary.split('\n\n').map((paragraph, index) => (
        <p key={index} {...styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};
