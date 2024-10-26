import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { isSectionId, type SectionId } from '@lib/site';

interface State {
  selectedSectionId: SectionId;
  updateSelectedSectionId: (sectionId: SectionId) => void;
  registerHomeSection: (sectionId: SectionId, element: Element) => void;
}

const initialState: State = {
  selectedSectionId: 'home',
  updateSelectedSectionId: () => {},
  registerHomeSection: () => {},
};

const HomeContext = createContext<State>(initialState);

export const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInitialPaint, setIsInitialPaint] = useState(true);
  const { pathname, search, hash: locationHash } = useLocation();
  const hash = locationHash.slice(1);
  const [elements, setElements] = useState<Partial<Record<SectionId, Element>>>({});
  const navigate = useNavigate();

  const [selectedSectionId, setSelectedSectionId] = useState<SectionId>('home');

  const updateSelectedSectionId = (sectionId: SectionId) => {
    if (sectionId === 'home' && (isInitialPaint || sectionId === selectedSectionId)) {
      return;
    }

    const root = `${pathname}${search}`;
    const location = sectionId === 'home' ? root : `${root}#${sectionId}`;

    if (location !== `${pathname}${search}${locationHash}`) {
      if (isInitialPaint) {
        setIsInitialPaint(false);
      }

      navigate(location, { replace: true });
    }
  };

  // I'm not particularly happy about this, but it works for now.
  const registerHomeSection = (sectionId: SectionId, element: Element) => {
    if (elements[sectionId]) {
      return;
    }

    setElements({ ...elements, [sectionId]: element });

    if (hash === sectionId) {
      element.scrollIntoView({ behavior: 'instant' });
      setSelectedSectionId(hash);
    }
  };

  useEffect(() => {
    if (hash && isSectionId(hash)) {
      setSelectedSectionId(hash);
    }
  }, [hash]);

  return (
    <HomeContext.Provider
      value={{ selectedSectionId, updateSelectedSectionId, registerHomeSection }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useSelectedSectionId = () => {
  const { selectedSectionId, updateSelectedSectionId } = useContext(HomeContext);
  return { selectedSectionId, updateSelectedSectionId };
};

export const useIsHome = () => {
  const { selectedSectionId } = useSelectedSectionId();
  return selectedSectionId === 'home';
};

export const useRegisterHomeSection = () => useContext(HomeContext).registerHomeSection;
