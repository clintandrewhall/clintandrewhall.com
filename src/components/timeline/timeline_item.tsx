const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
import type { ReactNode } from 'react';

import { useLogo } from '@lib/hooks';

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
  const startDate = <time dateTime={start}>{monthYear.format(new Date(start))}</time>;
  const endDate = end ? <time dateTime={end}>{monthYear.format(new Date(end))}</time> : 'Present';
  const logo = useLogo(id);

  return (
    <article {...styles.root}>
      <header {...styles.header}>
        {logo?.src ? (
          <img src={logo.src} alt={`${title} logo`} loading="lazy" decoding="async" />
        ) : null}
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
