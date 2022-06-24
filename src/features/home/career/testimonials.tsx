// Core modules imports are same as usual
import { Navigation } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Testimonial } from './testimonial';

import styles from './testimonials.module.css';
import { useReferences } from '../../../hooks';

export const Testimonials = () => {
  const references = useReferences();

  const items = references.map((testimonial) => (
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
          modules={[Navigation]}
          pagination={{ clickable: true }}>
          {items}
        </Swiper>
      </div>
      <div className={styles.buttonRow}>
        <a
          className={styles.button}
          href="https://www.linkedin.com/in/clintandrewhall"
          target="_blank"
          rel="noopener noreferrer">
          Visit my LinkedIn Profile
        </a>
      </div>
    </div>
  );
};
