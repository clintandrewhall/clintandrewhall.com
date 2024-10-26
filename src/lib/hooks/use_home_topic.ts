import { useEffect, useLayoutEffect } from 'react';
import { useRegisterHomeSection, useSelectedSectionId } from '@state/home';
import { type InViewHookResponse, useInView } from 'react-intersection-observer';

import { type SectionId } from '@lib/site';

interface Response extends Pick<InViewHookResponse, 'ref'> {
  isInView: boolean;
}

export interface UseHomeTopicParams {
  id: SectionId;
}

export const useHomeTopic = (topicId: SectionId): Response => {
  const { updateSelectedSectionId } = useSelectedSectionId();
  const registerSection = useRegisterHomeSection();

  const {
    ref,
    inView: isInView,
    entry,
  } = useInView({
    rootMargin: '-50% 0px -50% 0px',
  });

  useEffect(() => {
    if (isInView) {
      updateSelectedSectionId(topicId);
    }
  }, [isInView, updateSelectedSectionId, topicId]);

  useLayoutEffect(() => {
    if (entry && entry.target) {
      registerSection(topicId, entry.target);
    }
  }, [useRegisterHomeSection, entry, topicId]);

  return { ref, isInView };
};
