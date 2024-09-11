import { useLayoutEffect, useRef, useState } from 'react';

export const useDimensions = <T extends HTMLDivElement>() => {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    const { current } = ref;

    if (current) {
      const measure = () => {
        window.requestAnimationFrame(() => {
          const domRect = current.getBoundingClientRect();
          domRect.width = Math.round(domRect.width);
          domRect.height = Math.round(domRect.height);
          setDimensions(domRect);
        });
      };
      measure();

      window.addEventListener('resize', measure);

      return () => {
        window.removeEventListener('resize', measure);
      };
    }
  }, [ref]);

  return { dimensions, ref };
};
