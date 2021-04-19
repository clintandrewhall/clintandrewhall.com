import moment from 'moment';

import styles from './MediumPost.module.css';

export type MediumPostType = {
  coverSrc: string;
  href: string;
  latestTimestamp: number;
  slug: string;
  subtitle: string;
  timestamp: number;
  title: string;
};

type Props = {
  post: MediumPostType;
};

export const MediumPost = (props: Props) => {
  const { post } = props;
  const { href, latestTimestamp, subtitle, title } = post;
  const date = moment(latestTimestamp).format('MMMM Do, YYYY');

  return (
    <article className={styles.root}>
      <div className={styles.date}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {date}
        </a>
      </div>
      <h2 className={styles.heading}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{subtitle}</p>
    </article>
  );
};
