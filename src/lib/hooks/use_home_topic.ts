import { useEffect } from 'react';
import { useCurrentSectionId } from '@state/home';
import { type InViewHookResponse, useInView } from 'react-intersection-observer';

import { type SectionId } from '@lib/site';

interface Response extends Pick<InViewHookResponse, 'ref'> {
  isInView: boolean;
}

export interface UseHomeTopicParams {
  id: SectionId;
}

export const useHomeTopic = (topicId: SectionId): Response => {
  const { setCurrentSectionId } = useCurrentSectionId();

  const { ref, inView: isInView } = useInView({
    rootMargin: '-50% 0px -50% 0px',
  });

  useEffect(() => {
    if (isInView) {
      setCurrentSectionId(topicId);
    }
  }, [isInView]);

  return { ref, isInView };
};
