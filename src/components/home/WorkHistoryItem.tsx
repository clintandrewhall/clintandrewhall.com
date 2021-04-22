import cx from 'classnames';
import moment from 'moment';
import Markdown from 'react-markdown';

import styles from './WorkHistoryItem.module.css';

type Props = {
  className?: string;
  item: EmploymentHistory;
};

export const WorkHistoryItem = ({ className, item }: Props) => {
  if (item.hideFromSite) {
    return null;
  }

  const { employer, key, position, summary, start, end } = item;

  const startDate = moment(start).format('MMMM YYYY');
  const endDate = end ? moment(end).format('MMMM YYYY') : 'Present';

  return (
    <div className={className ? cx([styles.root, className]) : styles.root}>
      <div className={cx([styles.bullet, styles[key]])} />
      <div className={styles.header}>
        <p className={styles.timeframe}>
          {startDate} — {endDate}
        </p>
        <h4 className={styles.itemTitle}>{employer}</h4>
        <h5 className={styles.itemSubtitle}>{position}</h5>
      </div>
      <Markdown className={styles.desc}>{summary}</Markdown>
    </div>
  );
};
