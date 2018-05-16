// @flow

import React from 'react';
import styles from './Testimonial.module.css';
import cx from 'classnames';
import type { Recommendation } from './../../../_content/linkedin';

type Props = {
  className?: ?string,
  testmonial: Recommendation,
};

const Testimonial = (props: Props) => {
  const { className, testmonial } = props;
  const { person, content } = testmonial;
  const { name, imageSrc, title, connection } = person;

  return (
    <div className={cx([styles.root, className])}>
      <img src={imageSrc} alt={name} className={styles.avatar} />
      <p className={styles.content}>{content}</p>
      <div className={styles.author}>
        <span className={styles.name}>{name}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.connection}>{connection}</span>
      </div>
    </div>
  );
};

export default Testimonial;