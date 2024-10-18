import { Layout } from '@components/layout';
import { PeopleLine, Person } from '@components/people_line';
import { useResume } from '@lib/hooks';

import styles from './references.styles';

const attributes = {
  id: 'people',
  title: 'What People Say',
  subtitle: "I've worked with some remarkable people.",
};

export const References = () => {
  const resume = useResume();

  if (!resume) {
    return null;
  }

  const {
    references,
    basics: { profiles },
  } = resume;

  const linkedin = profiles.find((profile) => profile.network === 'LinkedIn');

  const people: Record<string, React.ReactNode> = {};

  references.forEach(({ connection, image, name, reference, title }, index) => {
    if (connection && image && name && reference && title) {
      people[index] = (
        <Person
          key={index}
          {...{ quote: reference, imageKey: image, name, title, subtitle: connection }}
        />
      );
    }
  });

  if (people.length === 0) {
    return null;
  }

  return (
    <Layout.Section {...attributes} {...styles.root}>
      <Layout.Section.Header {...attributes} {...styles.header} />
      <div {...styles.peopleLine}>
        <PeopleLine {...{ people }} />
      </div>
      {linkedin ? (
        <Layout.Section.Link
          href={linkedin.url}
          title="View my LinkedIn Profile"
          {...styles.link}
        />
      ) : null}
    </Layout.Section>
  );
};
