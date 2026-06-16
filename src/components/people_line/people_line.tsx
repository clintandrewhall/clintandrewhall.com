import { useState } from 'react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cx } from '@lib/css';

import styles from './people_line.styles';

export interface PeopleLineProps {
  people: Record<string, React.ReactNode>;
}

export const PeopleLine = ({ people }: PeopleLineProps) => {
  const [isEnhanced, setIsEnhanced] = useState(false);
  const items = Object.entries(people).map((item, key) => (
    <SwiperSlide key={key}>{item[1]}</SwiperSlide>
  ));

  const rootProps = isEnhanced
    ? cx(styles.root, 'peopleline', styles.enhanced)
    : cx(styles.root, 'peopleline');

  return (
    <div {...rootProps}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        navigation={{ enabled: true }}
        pagination={{ enabled: true }}
        breakpoints={{
          975: { slidesPerView: 2 },
        }}
        onSwiper={() => setIsEnhanced(true)}
        {...styles.swiper}
      >
        {items}
      </Swiper>
    </div>
  );
};
