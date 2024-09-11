import { useLogo } from '@/lib/hooks/use_logos';
import moment from 'moment';
import type { ReactNode } from 'react';

import styles from './timeline_item.styles';

export interface TimelineItemProps {
  id: string;
  title: string;
  subtitle: string;
  start: string;
  end?: string;
  children: ReactNode;
}

export const TimelineItem = ({ children, start, subtitle, title, end, id }: TimelineItemProps) => {
  const startDate = <time dateTime={start}>{moment(start).format('MMM YYYY')}</time>;
  const endDate = end ? <time dateTime={end}>{moment(end).format('MMM YYYY')}</time> : 'Present';
  const logo = useLogo(id);

  return (
    <article {...styles.root(logo?.src)}>
      <header {...styles.header}>
        <h4 {...styles.title}>{title}</h4>
        <h5 {...styles.subtitle}>{subtitle}</h5>
        <p {...styles.timeframe}>
          {startDate} to {endDate}
        </p>
      </header>
      <div {...styles.content}>{children}</div>
    </article>
  );
};
