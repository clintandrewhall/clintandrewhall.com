import moment from 'moment';

import styles from './medium_item.module.css';

type Props = {
  post: MediumPost;
};

export const MediumItem = ({ post }: Props) => {
  const { link, timestamp, title, categories } = post;
  const date = moment(timestamp).format('MMMM Do, YYYY');

  return (
    <article className={styles.root}>
      <div className={styles.date}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {date}
        </a>
      </div>
      <h2 className={styles.heading}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p className={styles.tags}>
        {categories.map((category) => (
          <a href={`https://medium.com/tags/${category}`} key={category}>
            {category}
          </a>
        ))}
      </p>
    </article>
  );
};
