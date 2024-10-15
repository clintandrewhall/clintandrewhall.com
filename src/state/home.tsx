import { createContext, useContext, useEffect, useState } from 'react';

import { type SectionId } from '@lib/site';

interface State {
  currentSectionId: SectionId;
  setCurrentSectionId: (sectionId: SectionId) => void;
}

const initialState: State = {
  currentSectionId: 'home',
  setCurrentSectionId: () => {},
};

const HomeContext = createContext<State>(initialState);

export const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSectionId, setCurrentSectionId] = useState<SectionId>('home');

  useEffect(() => {
    const root = `${window.location.pathname}${window.location.search}`;
    const location = currentSectionId === 'home' ? root : `${root}#${currentSectionId}`;

    window.history.replaceState(null, '', location);
  }, [currentSectionId]);

  return (
    <HomeContext.Provider value={{ currentSectionId, setCurrentSectionId }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useCurrentSectionId = () => {
  const { currentSectionId, setCurrentSectionId } = useContext(HomeContext);
  return { currentSectionId, setCurrentSectionId };
};

export const useIsHome = () => {
  const { currentSectionId } = useCurrentSectionId();
  return currentSectionId === 'home';
};
