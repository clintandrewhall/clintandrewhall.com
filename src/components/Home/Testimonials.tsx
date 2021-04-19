import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimonial } from './Testimonial';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import styles from './Testimonials.module.css';
import resume from '../../_content/resume.json';

// install Swiper modules
SwiperCore.use([Navigation]);

export const Testimonials = () => {
  const { testimonials } = resume;

  const items = testimonials.map((testimonial: Testimonial) => (
    <SwiperSlide key={testimonial.timestamp}>
      <Testimonial testmonial={testimonial} />
    </SwiperSlide>
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
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}>
          {items}
        </Swiper>
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
};
