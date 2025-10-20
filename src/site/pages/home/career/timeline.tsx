import Markdown from 'react-markdown';

import { Section } from '@components/layout';
import { Timeline as TimelineComponent } from '@components/timeline';
import { useResume } from '@lib/hooks';

const attributes = {
  id: 'career',
  name: 'Career',
  title: 'A Journey, Never a Destination',
  subtitle: 'My most recent stops along the way.',
};

export const Timeline = () => {
  const resume = useResume();

  if (!resume) {
    return null;
  }

  const { work } = resume;

  return (
    <Section {...attributes}>
      <Section.Header {...attributes} />
      <TimelineComponent
        items={work.slice(0, 6).map((item) => ({
          id: item.key,
          title: item.name,
          subtitle: item.position,
          start: item.startDate,
          end: item.endDate,
          children: <Markdown>{item.summary}</Markdown>,
        }))}
      />
      <Section.Link href="/resume" title="View my resume" />
    </Section>
  );
};
