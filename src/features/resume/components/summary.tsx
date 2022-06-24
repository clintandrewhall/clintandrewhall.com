import styles from './summary.module.css';
import Markdown from 'react-markdown';

export interface Props {
  summary: string;
}

export const Summary = ({ summary }: Props) => {
  return (
    <section id="summary" className={styles.root}>
      <h2 className={styles.title}>
        <span className={styles.icon}>
          <i className="fas fa-user"></i>
        </span>
        <span>Personal Summary</span>
      </h2>
      <div className={styles.summary}>
        <Markdown>{summary}</Markdown>
      </div>
    </section>
  );
};
