import React, { PropsWithChildren, useContext } from 'react';

const Context = React.createContext<Resume | null>(null);

interface Props extends PropsWithChildren {
  resume: Resume | null;
}

export const ResumeProvider = ({ children, resume }: Props) => {
  return <Context.Provider value={resume}>{children}</Context.Provider>;
};

export function useResume() {
  const resume = useContext(Context);

  if (!resume) {
    throw new Error(
      'Resume Context is missing.  Ensure your component or React root is wrapped with ResumeProvider.',
    );
  }

  return resume;
}

export const useBasics = () => useResume().basics;
export const useProfiles = () => useBasics()?.profiles || [];
export const useWork = () => useResume().work || [];
export const useVolunteer = () => useResume().volunteer || [];
export const useEducation = () => useResume().education || [];
export const useAwards = () => useResume().awards || [];
export const usePublications = () => useResume().publications || [];
export const useSkills = () => useResume().skills || [];
export const useLanguages = () => useResume().languages || [];
export const useInterests = () => useResume().interests || [];
export const useReferences = () => useResume().references || [];
export const useProjects = () => useResume().projects || [];
export const useMeta = () => useResume().meta || {};
export const useVersion = () => useMeta().version || '';
