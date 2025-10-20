import { forwardRef } from 'react';

import { Section } from '@components/layout';
import posts from '@content/medium.json';

import { Item } from './item';

import styles from './medium.styles';

interface Posts {
  posts: MediumPost[];
}

const attributes = {
  id: 'medium',
  name: 'Medium',
  title: 'My Drips to The Firehose.',
  subtitle: 'Sometimes I like to post notes or thoughts. Opinions are always my own.',
};

const MediumComponent = forwardRef<HTMLDivElement>((_props, ref) => {
  const items = (posts as Posts).posts
    .slice(0, 4)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((entry) => <Medium.Item post={entry} key={`${entry.timestamp}`} />);

  return (
    <Section {...{ ref, ...attributes, ...styles.root }}>
      <Section.Header {...{ ...attributes, ...styles.header }} />
      <div {...styles.content}>{items}</div>
      <Section.Link
        href="https://clintandrewhall.medium.com/"
        title="My Medium Profile"
        {...styles.link}
      />
    </Section>
  );
});

export const Medium = Object.assign(MediumComponent, {
  Item,
});
