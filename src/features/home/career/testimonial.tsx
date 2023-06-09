import cx from 'classnames';
import styles from './testimonial.module.css';

type Props = {
  className?: string;
  testmonial: Reference;
};

const pathContext = require.context(
  'responsive-loader?size=66!../../..',
  true,
  /\.(jpe?g|png)$/,
);

export const Testimonial = (props: Props) => {
  const { className, testmonial } = props;
  const { name, image, title, connection, reference } = testmonial;
  const responsiveImage = image ? pathContext(`.${image}`) : null;

  return (
    <div className={className ? cx([styles.root, className]) : styles.root}>
      <img src={responsiveImage} alt={name} className={styles.avatar} />
      <blockquote className={styles.quote}>{reference}</blockquote>
      <div>
        <span className={styles.name}>{name}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.connection}>{connection}</span>
      </div>
    </div>
  );
};
