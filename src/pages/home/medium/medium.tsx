import { useEffect, useState } from 'react';

import { Layout } from '@components/layout';
import { useHomeTopic } from '@lib/hooks';

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

const Component = () => {
  const { ref } = useHomeTopic('medium');
  const [stories, setStories] = useState<Posts | null>(null);

  useEffect(() => {
    (async function loadPosts() {
      const posts = await import('@content/medium.json');
      setStories(posts);
    })();
  }, [setStories, stories]);

  if (!stories) {
    return null;
  }

  const items = stories.posts
    .slice(0, 4)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((entry) => <Medium.Item post={entry} key={`${entry.timestamp}`} />);

  return (
    <Layout.Section {...{ ref, ...attributes, ...styles.root }}>
      <Layout.Section.Header {...{ ...attributes, ...styles.header }} />
      <div {...styles.content}>{items}</div>
      <Layout.Section.Link
        href="https://clintandrewhall.medium.com/"
        title="My Medium Profile"
        {...styles.link}
      />
    </Layout.Section>
  );
};

export const Medium = Object.assign(Component, {
  Item,
});
