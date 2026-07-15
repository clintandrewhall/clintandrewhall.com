import { Section } from '@components/layout';
import { Timeline as TimelineComponent } from '@components/timeline';
import { useCareer } from '@lib/hooks';

const attributes = {
  id: 'career',
  name: 'Career',
  title: 'A Journey, Never a Destination',
  subtitle: 'My most recent stops along the way.',
};

export const Timeline = () => {
  // The two most recent companies carry the story on the home page; the full
  // history lives on the résumé.
  const companies = useCareer(2);

  if (!companies.length) {
    return null;
  }

  return (
    <Section {...attributes}>
      <Section.Header {...attributes} />
      <TimelineComponent companies={companies} />
      <Section.Link href="/resume" title="View my resume" />
    </Section>
  );
};
