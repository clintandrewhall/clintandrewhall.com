// @flow

import React from 'react';
import cx from 'classnames';
import styles from './Testimonial.module.css';

type Props = {
  className?: ?string,
  testmonial: Testimonial,
};

// $FlowFixMe Webpack require.context not flow-ified
const pathContext = require.context(
  'responsive-loader?size=66!./../..',
  true,
  /\.(jpe?g|png)$/,
);

const TestimonialComponent = (props: Props) => {
  const { className, testmonial } = props;
  const { name, imageSrc, title, connection, quote } = testmonial;
  const responsiveImage = pathContext(`.${imageSrc}`);

  return (
    <div className={className ? cx([styles.root, className]) : styles.root}>
      <img src={responsiveImage} alt={name} className={styles.avatar} />
      <blockquote className={styles.quote}>{quote}</blockquote>
      <div>
        <span className={styles.name}>{name}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.connection}>{connection}</span>
      </div>
    </div>
  );
};

export default TestimonialComponent;
