import styles from './profiles.module.css';

interface Props {
  profiles: Profile[];
}
export const Profiles = ({ profiles }: Props) => {
  const items = profiles.map(({ network, url, username }) => (
    <>
      <dt className={styles.dtl} key={`title${network}`}>
        {network}
      </dt>
      <dd className={styles.dfn} key={`dfn${network}`}>
        <a target="_blank" href={url}>
          <i className={styles[network.toLowerCase()]}></i>
          {username}
        </a>
      </dd>
    </>
  ));

  return (
    <section id="profiles" className={styles.root}>
      <h2 className={styles.title}>Profiles</h2>
      <dl className={styles.list}>{items}</dl>
    </section>
  );
};
