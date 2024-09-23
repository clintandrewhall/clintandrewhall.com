import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './people_line.styles';

export interface PeopleLineProps {
  people: Record<string, React.ReactNode>;
}

export const PeopleLine = ({ people }: PeopleLineProps) => {
  const items = Object.entries(people).map((item, key) => (
    <SwiperSlide key={key}>{item[1]}</SwiperSlide>
  ));

  return (
    <div {...styles.root}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        navigation={{ enabled: true }}
        pagination={{ enabled: true }}
        breakpoints={{
          975: { slidesPerView: 2 },
        }}
        {...styles.swiper}
      >
        {items}
      </Swiper>
    </div>
  );
};
