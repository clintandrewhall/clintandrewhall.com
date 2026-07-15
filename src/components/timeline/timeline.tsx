import { TimelineCompany, type TimelineCompanyProps } from './timeline_company';

import styles from './timeline.styles';

interface TimelineWithProp {
  companies: TimelineCompanyProps[];
}

interface TimelineWithChildren {
  children: React.ReactElement<TimelineCompanyProps> | React.ReactElement<TimelineCompanyProps>[];
}

export type TimelineProps = ExclusiveUnion<TimelineWithProp, TimelineWithChildren>;

const TimelineComponent = ({ children: childrenProp, companies }: TimelineProps) => {
  const children =
    childrenProp ??
    companies.map((company, index) => (
      <TimelineCompany key={`${company.id}_${index}`} enterIndex={index} {...company} />
    ));

  return <div {...styles.root}>{children}</div>;
};

export const Timeline = Object.assign(TimelineComponent, { Company: TimelineCompany });
