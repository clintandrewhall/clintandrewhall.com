import { useEffect } from 'react';
import { type InViewHookResponse, useInView } from 'react-intersection-observer';

import { type SectionId } from '@lib/site';

import { useCurrentSectionId } from './state';

interface Response extends Pick<InViewHookResponse, 'ref'> {
  isInView: boolean;
}

export interface UseHomeTopicParams {
  id: SectionId;
}

export const useHomeTopic = (topicId: SectionId): Response => {
  const { setCurrentSectionId } = useCurrentSectionId();

  const { ref, inView: isInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isInView) {
      setCurrentSectionId(topicId);
    }
  }, [isInView]);

  return { ref, isInView };
};
