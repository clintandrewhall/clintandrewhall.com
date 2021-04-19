import resume from '../../_content/resume.json';
import styles from './Social.module.css';

export const Social = () => {
  const { social } = resume;
  const items = social.map((item) => (
    <li className={styles.socialItem} key={item.network}>
      <a
        className={styles.socialLink}
        href={item.url}
        rel="noopener noreferrer"
        target="_blank">
        <i className={`im im-${item.network}`} aria-hidden="true" />
        <span>{item.label}</span>
      </a>
    </li>
  ));

  return <ul className={styles.social}>{items}</ul>;
};
