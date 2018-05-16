// @flow

import React from 'react';
import Slider from 'react-slick';

import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';
import data from './../../../_content/linkedin';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Recommendation } from './../../../_content/linkedin';

const PrevArrow = (props: {
  className?: string,
  style?: Object,
  onClick?: Function,
}) => (
  <div className={styles.prev} onClick={props.onClick} style={props.style}>
    <i className="im im-arrow-left" aria-hidden="true" />
  </div>
);

const NextArrow = (props: {
  className?: string,
  style?: Object,
  onClick?: Function,
}) => (
  <div className={styles.next} onClick={props.onClick} style={props.style}>
    <i className="im im-arrow-right" aria-hidden="true" />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  const { recommendations } = data;

  recommendations.sort((a: Recommendation, b: Recommendation) => {
    return b.timestamp - a.timestamp;
  });

  const items = recommendations.map((recommendation, index) => (
    <Testimonial key={index} testmonial={recommendation} />
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
        <Slider className={styles.slider} {...settings}>
          {items}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
