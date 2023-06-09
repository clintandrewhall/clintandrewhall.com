import { useProfiles } from '../../../hooks';

import styles from './social.module.css';

export const Social = () => {
  const profiles = useProfiles();
  const items = profiles.map((profile) => (
    <li className={styles.socialItem} key={profile.network}>
      <a
        className={styles.socialLink}
        href={profile.url}
        rel="noopener noreferrer"
        target="_blank">
        <i
          className={`im im-${profile.network?.toLowerCase() || 'empty'}`}
          aria-hidden="true"
        />
        <span>{profile.network}</span>
      </a>
    </li>
  ));

  return <ul className={styles.social}>{items}</ul>;
};
