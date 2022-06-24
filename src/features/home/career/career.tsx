import { Testimonials } from './testimonials';
import { WorkItem } from './work_item';

import styles from './career.module.css';

export interface Props {
  works: Work[];
  references: Reference[];
}

export const Career = ({ works, references }: Props) => {
  if (works.length <= 0) {
    return null;
  }

  const items = works.map((work) => (
    <WorkItem key={`${work.startDate}`} {...{ work }} />
  ));

  return (
    <section className={styles.root} id="career" key="root">
      <div className={styles.work}>
        <div className={styles.intro}>
          <div className={styles.introContent}>
            <h2 className={styles.title}>Career</h2>
            <h3 className={styles.subtitle}>Read About My Experience</h3>
            <p className={styles.lead}>
              These are a few roles I&apos;ve held recently.
            </p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.timeline}>{items.slice(0, 2)}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.timeline}>{items.slice(2, 4)}</div>
        </div>
        <div className={styles.resumeRow}>
          <a href="/resume" className={styles.resumeButton}>
            View my resume
          </a>
        </div>
      </div>
      <Testimonials {...{ references }} />
    </section>
  );
};
