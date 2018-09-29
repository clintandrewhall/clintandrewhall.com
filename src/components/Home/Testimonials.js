// @flow

import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

import TestimonialComponent from './Testimonial';
import styles from './Testimonials.module.css';
import data from './../../_content/resume.json';

const options = {
  wrapAround: false,
  pageDots: false,
  cellAlign: 'left',
};

class Testimonials extends React.Component<any> {
  _flkty: any;

  render() {
    const { testimonials } = (data: FreshResume);

    const items = testimonials.map((testimonial: Testimonial) => (
      <TestimonialComponent
        key={testimonial.timestamp}
        testmonial={testimonial}
      />
    ));

    return (
      <div className={styles.root}>
        <div className={styles.overlay} />
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.heading}>What People Say</h2>
            <h3 className={styles.lead}>
              I&apos;ve worked with some remarkable people.
            </h3>
          </div>
        </div>
        <div className={styles.content}>
          <Flickity
            flickityRef={c => {
              this._flkty = c;
            }}
            className={styles.slider}
            options={options}>
            {items}
          </Flickity>
        </div>
        <div className={styles.buttonRow}>
          <a
            className={styles.button}
            href="https://www.linkedin.com/in/clinthall"
            target="_blank"
            rel="noopener noreferrer">
            Visit my LinkedIn Profile
          </a>
        </div>
      </div>
    );
  }
}

export default Testimonials;
