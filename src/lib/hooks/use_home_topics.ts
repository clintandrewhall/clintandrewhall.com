import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate } from 'react-router-dom';

import { isTopicId, type TopicId } from '@lib/site';

type SectionId = Exclude<TopicId, 'resume'>;

const isSectionId = (value: string): value is SectionId => {
  return isTopicId(value) && value !== 'resume';
};

const useHomeTopic = (id: TopicId) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const isDOMReady = useRef(false);

  const { ref: inViewRef, inView: isInView } = useInView({
    rootMargin: '-50% 0px -50% 0px',
  });

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (node === null) {
        return;
      }

      inViewRef(node);
      nodeRef.current = node;
      isDOMReady.current = true;
    },
    [inViewRef],
  );

  return { id, ref, node: nodeRef.current, isInView, isDOMReady: isDOMReady.current };
};

const useTopicRefs = () => {
  const home = useHomeTopic('home');
  const about = useHomeTopic('about');
  const portfolio = useHomeTopic('portfolio');
  const career = useHomeTopic('career');
  const medium = useHomeTopic('medium');

  return { home, about, portfolio, career, medium };
};

export const useHomeTopics = () => {
  const topics = useTopicRefs();
  const values = Object.values(topics);

  const currentTopicId = values.find((topic) => topic.isInView)?.id || 'home';
  const isDOMReady = values.every((topic) => topic.isDOMReady);

  const navigate = useNavigate();
  const { hash: locationHash, pathname, search } = useLocation();

  const hash = locationHash.slice(1);
  const [topicOnLoad, setTopicOnLoad] = useState<SectionId | null>(isSectionId(hash) ? hash : null);

  useEffect(() => {
    if (topicOnLoad || !isDOMReady) {
      return;
    }

    const root = `${pathname}${search}`;
    const location = currentTopicId === 'home' ? root : `${root}#${currentTopicId}`;

    if (location !== `${root}${locationHash}`) {
      navigate(location, { replace: true });
    }
  }, [currentTopicId, navigate, pathname, search, isDOMReady, locationHash, topicOnLoad]);

  useEffect(() => {
    if (topicOnLoad && isDOMReady) {
      const topic = topics[topicOnLoad];
      topic.node?.scrollIntoView({ behavior: 'instant' });
      setTopicOnLoad(null);
    }
  }, [isDOMReady, topicOnLoad, topics]);

  return {
    ...topics,
    currentTopicId,
  };
};
