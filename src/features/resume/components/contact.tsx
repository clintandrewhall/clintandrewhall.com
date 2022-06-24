import styles from './contact.module.css';

export interface Props {
  email: string;
  url: string;
  location: ResumeLocation;
}

export const Contact = ({ email, url, location }: Props) => {
  return (
    <section id="contact" className={styles.root}>
      <h2 className={styles.hidden}>Contact</h2>
      <dl className={styles.contactList}>
        <dt className={styles.hidden}>Email</dt>
        <dd className={styles.contactInfo}>
          <i className={styles.emailIcon}></i>
          <a target="_blank" href={`mailto:${email}`}>
            {email}
          </a>
        </dd>
        <dt className={styles.hidden}>Website</dt>
        <dd className={styles.contactInfo}>
          <i className={styles.websiteIcon}></i>
          <a target="_blank" href={url}>
            {url}
          </a>
        </dd>{' '}
        <dt className={styles.hidden}>Location</dt>
        <dd className={styles.contactInfo}>
          <i className={styles.locationIcon}></i>
          {location.city}, {location.region}, {location.countryCode}
        </dd>
      </dl>
    </section>
  );
};
