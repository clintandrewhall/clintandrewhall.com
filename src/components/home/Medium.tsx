import styles from './Medium.module.css';
import { useFetch } from '../useFetch';
import { MediumItem } from './MediumItem';

export const Medium = () => {
  const { error, response } = useFetch<MediumResponse>('/data/medium');

  if (error || response === null) {
    return null;
  }

  if (!response) {
    return null;
  }

  const items = response.posts
    .slice(0, 4)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((entry) => <MediumItem post={entry} key={`${entry.timestamp}`} />);

  return (
    <section id="medium" className={styles.root}>
      <div className={styles.header}>
        <header className={styles.headerContent}>
          <h2 className={styles.title}>Medium</h2>
          <h3 className={styles.subtitle}>My Drips to The Firehose.</h3>
          <p className={styles.lead}>
            Sometimes I like to post notes or thoughts. Opinions are always my
            own.
          </p>
        </header>
      </div>
      <div className={styles.content}>
        <div className={styles.area}>
          <div className={styles.list}>{items}</div>
        </div>
      </div>
    </section>
  );
};
