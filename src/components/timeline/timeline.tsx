import { TimelineItem, type TimelineItemProps } from '@/components/timeline';

import styles from './timeline.styles';

interface TimelineWithProp {
  items: TimelineItemProps[];
}

interface TimelineWithChildren {
  children: React.ReactElement<TimelineItemProps> | React.ReactElement<TimelineItemProps>[];
}

export type TimelineProps = ExclusiveUnion<TimelineWithProp, TimelineWithChildren>;

export const Timeline = ({ children: childrenProp, items }: TimelineProps) => {
  const children = childrenProp ?? items.map((item) => <TimelineItem key={item.title} {...item} />);
  return <div {...styles.root}>{children}</div>;
};