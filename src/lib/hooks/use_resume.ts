import { useEffect, useState } from 'react';

export const useResume = () => {
  const [resume, setResume] = useState<Resume | null>(null);

  useEffect(() => {
    import('@/content/resume.json').then((res) => setResume(res));
  }, []);

  return resume;
};
