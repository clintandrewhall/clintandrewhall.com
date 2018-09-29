// @flow

import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import Markdown from 'react-markdown';

import styles from './WorkHistoryItem.module.css';

type WorkHistory = {
  employer: string,
  key: string,
  position: string,
  summary: string,
  start: string,
  end: string,
  keywords: Array<string>,
  highlights: Array<string>,
};

type Props = {
  className?: string,
  item: WorkHistory,
};

const WorkHistoryItem = (props: Props) => {
  const { className, item } = props;
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
      <Markdown className={styles.desc} source={summary} />
    </div>
  );
};

export default WorkHistoryItem;
