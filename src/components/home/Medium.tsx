import styles from './Medium.module.css';

export const Medium = () => {
  return (
    <section id="medium" className={styles.root}>
      <div className={styles.header}>
        <header className={styles.headerContent}>
          <h2 className={styles.title}>Medium</h2>
          <h3 className={styles.subtitle}>My Drips to The Firehose.</h3>
          <p className={styles.lead}>
            Sometimes I like to post notes or thoughts. Opinions are always my
            own.
          </p>
        </header>
      </div>
      <div className={styles.content}>
        <div className={styles.area}>
          <p>
            I used to list my posts here, but Medium recently put a CAPTCHA in
            front of their public HTTP endpoint, and they haven&apos;t supplied
            a replacement in{' '}
            <a href="https://github.com/Medium/medium-api-docs">their API</a>.
            🤕
          </p>
          <p>
            In the meantime, check out my posts{' '}
            <a href="https://medium.com/@clintandrewhall">here</a>.
          </p>
        </div>
      </div>
    </section>
  );
};
