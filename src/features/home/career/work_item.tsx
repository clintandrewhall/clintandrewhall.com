import cx from 'classnames';
import moment from 'moment';
import Markdown from 'react-markdown';

import styles from './work_item.module.css';

type Props = {
  className?: string;
  work: Work;
};

export const WorkItem = ({ className, work }: Props) => {
  if (work.hideFromSite) {
    return null;
  }

  const { name, key, position, summary, startDate: start, endDate: end } = work;

  if (!summary) {
    return null;
  }

  const startDate = moment(start).format('MMMM YYYY');
  const endDate = end ? moment(end).format('MMMM YYYY') : 'Present';

  return (
    <div className={className ? cx([styles.root, className]) : styles.root}>
      <div className={cx([styles.bullet, key ? styles[key] : ''])} />
      <div className={styles.header}>
        <p className={styles.timeframe}>
          {startDate} — {endDate}
        </p>
        <h4 className={styles.itemTitle}>{name}</h4>
        <h5 className={styles.itemSubtitle}>{position}</h5>
      </div>
      <Markdown className={styles.desc}>{summary}</Markdown>
    </div>
  );
};
