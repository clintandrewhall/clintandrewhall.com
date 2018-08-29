// @flow

import React from 'react';
import Flickity from 'react-flickity-component';

import TestimonialComponent from './Testimonial';
import styles from './Testimonials.module.css';
import data from './../../../_content/resume.json';

import 'flickity/css/flickity.css';

const options = {
  wrapAround: true,
  pageDots: false,
  cellAlign: 'left',
};

class Testimonials extends React.Component<any> {
  _flkty: any;

  // ugly
  componentDidMount() {
    setTimeout(() => {
      this._flkty.reposition();
    }, 4000);
  }

  render() {
    const { testimonials } = (data: FreshResume);

    const items = testimonials.map((testimonial: Testimonial, index) => (
      <TestimonialComponent key={index} testmonial={testimonial} />
    ));

    return (
      <div className={styles.root}>
        <div className={styles.overlay} />
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.heading}>What People Say.</h2>
            <h3 className={styles.subheading}>
              See more on{' '}
              <a href="https://www.linkedin.com/in/clinthall/">LinkedIn</a>
            </h3>
          </div>
        </div>
        <div className={styles.content}>
          <Flickity
            flickityRef={c => (this._flkty = c)}
            className={styles.slider}
            options={options}
          >
            {items}
          </Flickity>
        </div>
      </div>
    );
  }
}

export default Testimonials;
