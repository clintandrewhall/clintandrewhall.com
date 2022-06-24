import { useEffect, useRef, useState } from 'react';

function fade(
  element: HTMLDivElement | null,
  callback: (() => void) | null = null,
): void {
  if (!element) {
    return;
  }

  let opacity = parseFloat(element.style.opacity);
  opacity -= 0.1;

  if (opacity < 0) {
    element.style.display = 'none';
    callback && callback();
  } else {
    setTimeout(() => fade(element, callback), 40);
  }

  element.style.opacity = `${opacity}`;
}

// TODO: this is all old, crufty nonsense.
export const usePageLoad = () => {
  const html = document.getElementsByTagName('html')[0];
  const [isLoaded, setIsLoaded] = useState(html.classList.contains('loaded'));
  const preloaderRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) {
      html.classList.add('preload');

      if (loaderRef.current && preloaderRef.current) {
        loaderRef.current.style.opacity = '1';
        preloaderRef.current.style.opacity = '1';

        fade(loaderRef.current, () => {
          html.classList.remove('preload');
          html.classList.add('loaded');
          fade(preloaderRef.current);

          setIsLoaded(true);
        });
      }
    }
  }, [html.classList, isLoaded]);

  return [isLoaded, preloaderRef, loaderRef] as const;
};
