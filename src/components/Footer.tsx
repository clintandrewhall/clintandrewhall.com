import resume from '../_content/resume.json';
import styles from './Footer.module.css';

export const Footer = () => {
  const { social } = resume;
  const items = social.map((item) => (
    <li key={item.network}>
      <a href={item.url} rel="noopener noreferrer" target="_blank">
        <i className={`im im-${item.network}`} aria-hidden="true" />
        <span>{item.label}</span>
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
          <span>© Copyright Clint Andrew Hall 2018</span>
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
