import styles from './footer.module.css';

export interface Props {
  profiles?: Profile[];
}

export const Footer = ({ profiles = [] }: Props) => {
  const year = new Date().getFullYear();
  const items = profiles.map((profile) => (
    <li key={profile.network} className={styles.socialItem}>
      <a
        className={styles.socialItemLink}
        href={profile.url}
        rel="noopener noreferrer"
        target="_blank">
        <i
          className={`${
            styles.socialItemLogo
          } im im-${profile.network.toLowerCase()}`}
          aria-hidden="true"
        />
        <span className={styles.socialItemLabel}>{profile.network}</span>
      </a>
    </li>
  ));

  return (
    <footer className={styles.root}>
      <div className={styles.top}>
        <div className={styles.topContent}>
          <div className={styles.logo}>
            <a className={styles.logoLink} href="#0">
              <img src="/images/logo.png" alt="Homepage" />
            </a>
          </div>
          <ul className={styles.social}>{items}</ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          <span>© Copyright Clint Andrew Hall {year}</span>
          <span>
            <a href="https://github.com/clintandrewhall/clintandrewhall.com">
              Crafted
            </a>{' '}
            with <a href="https://reactjs.org/">React</a>
          </span>
          <span>
            Design by <a href="https://www.styleshout.com/">styleshout</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
