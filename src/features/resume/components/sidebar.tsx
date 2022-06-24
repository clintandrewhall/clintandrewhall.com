import { FC } from 'react';

import styles from './sidebar.module.css';

export interface Props {
  name: string;
  label: string;
  image: string;
}

export const Sidebar: FC<Props> = ({ children, name, label, image }) => {
  return (
    <div className={styles.root}>
      <header className={styles.profileContainer}>
        <img src={image} className={styles.profile} />
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.tagline}>{label}</h2>
      </header>
      {children}
    </div>
  );
};
