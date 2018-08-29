// @flow

import React from 'react';
import styles from './Testimonial.module.css';
import cx from 'classnames';

type Props = {
  className?: ?string,
  testmonial: Testimonial,
};

const TestimonialComponent = (props: Props) => {
  const { className, testmonial } = props;
  const { name, imageSrc, title, connection, quote } = testmonial;

  return (
    <div className={className ? cx([styles.root, className]) : styles.root}>
      <img src={imageSrc} alt={name} className={styles.avatar} />
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
