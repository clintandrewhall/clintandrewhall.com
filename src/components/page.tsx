import { FC } from 'react';

import { usePageLoad } from '../hooks';

import styles from './page.module.css';

export const Page: FC = ({ children }) => {
  const [_isLoaded, preloaderRef, loaderRef] = usePageLoad();

  return (
    <div className={styles.root} style={{ height: '100%' }}>
      {children}
      <div ref={preloaderRef} id="preloader" className={styles.preloader}>
        <div ref={loaderRef} id="loader" className={styles.loader} />
      </div>
    </div>
  );
};
