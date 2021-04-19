import styles from './Stats.module.css';

export type Props = {
  user?: {
    followers: number;
    following: number;
    public_gists: number;
    public_repos: number;
  } | null;
};

export const Stats = ({ user }: Props) => {
  if (!user) {
    return null;
  }

  const { followers, following, public_gists, public_repos } = user;

  return (
    <section id="stats" key="stats" className={styles.stats}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.count}>{public_repos}</div>
          <h4 className={styles.title}>Repos</h4>
        </div>
        <div className={styles.column}>
          <div className={styles.count}>{followers}</div>
          <h4 className={styles.title}>Followers</h4>
        </div>
        <div className={styles.column}>
          <div className={styles.count}>{following}</div>
          <h4 className={styles.title}>Following</h4>
        </div>
        <div className={styles.column}>
          <div className={styles.count}>{public_gists}</div>
          <h4 className={styles.title}>Gists</h4>
        </div>
      </div>
    </section>
  );
};
