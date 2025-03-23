import { TimelineItem, type TimelineItemProps } from './timeline_item';

import styles from './timeline.styles';

interface TimelineWithProp {
  items: TimelineItemProps[];
}

interface TimelineWithChildren {
  children: React.ReactElement<TimelineItemProps> | React.ReactElement<TimelineItemProps>[];
}

export type TimelineProps = ExclusiveUnion<TimelineWithProp, TimelineWithChildren>;

const TimelineComponent = ({ children: childrenProp, items }: TimelineProps) => {
  const children =
    childrenProp ??
    items.map((item, index) => <TimelineItem key={`${item.title}_${index}`} {...item} />);
  return <div {...styles.root}>{children}</div>;
};

export const Timeline = Object.assign(TimelineComponent, { Item: TimelineItem });
