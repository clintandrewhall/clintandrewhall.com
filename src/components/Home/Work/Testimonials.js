// @flow

import React from 'react';
import Flickity from 'react-flickity-component';

import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';
import data from './../../../_content/linkedin';

import type { Recommendation } from './../../../_content/linkedin';

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
    }, 3000);
  }

  render() {
    const { recommendations } = data;

    const items = recommendations.map(
      (recommendation: Recommendation, index) => (
        <Testimonial key={index} testmonial={recommendation} />
      ),
    );

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
