import moment from 'moment';

import styles from './item.styles';

type Props = {
  post: MediumPost;
};

export const Item = ({ post }: Props) => {
  const { link, timestamp, title, categories /*imgSrc*/ } = post;
  const date = moment(timestamp).format('MMMM Do, YYYY');

  return (
    <article {...styles.root()}>
      <header {...styles.header}>
        <h4 {...styles.title}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p {...styles.date}>{date}</p>
      </header>
      <ul {...styles.list}>
        {categories.map((category) => (
          <li key={category} {...styles.category}>
            <a
              href={`https://medium.com/tags/${category}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};
