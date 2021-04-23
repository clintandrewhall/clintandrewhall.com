import { Testimonials } from './Testimonials';
import { WorkHistoryItem } from './WorkHistoryItem';

import styles from './Work.module.css';
import resume from '../../content/resume.json';

export const Work = () => {
  const resumeSource = resume;
  const { employment } = resumeSource || {};
  const { history } = employment || [];

  if (history.length <= 0) {
    return null;
  }

  const blocks = history
    .filter((item) => !item.hideFromSite)
    .map((item) => <WorkHistoryItem key={`${item.start}`} item={item} />);

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
          <div className={styles.timeline}>{blocks.slice(0, 2)}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.timeline}>{blocks.slice(2, 4)}</div>
        </div>
        <div className={styles.resumeRow}>
          <a href="/resume" className={styles.resumeButton}>
            View my resume
          </a>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};
