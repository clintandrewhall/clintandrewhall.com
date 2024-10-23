import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();
  const [currentSectionId, setCurrentSectionId] = useState<SectionId>('home');

  console.log('incoming', pathname, search, hash);

  useEffect(() => {
    const root = `${pathname}${search}`;
    const location = currentSectionId === 'home' ? root : `${root}#${currentSectionId}`;

    navigate(location, { replace: true });
    // window.history.replaceState(null, '', location);
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
