export interface PersonProps {
  quote: string;
  name: string;
  title: string;
  subtitle: string;
  imageKey: string;
}

import { useAvatar } from '@/lib/hooks/use_people';

import styles from './person.styles';

export const Person = ({ name, quote, subtitle, title, imageKey }: PersonProps) => {
  const avatarSrc = useAvatar(imageKey);
  const avatar = avatarSrc ? <img src={avatarSrc.src} alt={name} {...styles.avatar} /> : null;

  return (
    <div {...styles.root}>
      {avatar}
      <blockquote {...styles.quote} data-swiper-parallax="-100" data-swiper-parallax-duration="300">
        {quote}
      </blockquote>
      <dl {...styles.details} data-swiper-parallax="-100" data-swiper-parallax-duration="300">
        <dt key="title_name">Name</dt>
        <dd
          key="value_name"
          {...styles.name}
          data-swiper-parallax="-100"
          data-swiper-parallax-duration="100"
        >
          {name}
        </dd>
        <dt key="title_title">Title</dt>
        <dd
          key="value_title"
          {...styles.title}
          data-swiper-parallax="-100"
          data-swiper-parallax-duration="200"
        >
          {title}
        </dd>
        <dt key="title_subtitle">Subtitle</dt>
        <dd
          key="value_subtitle"
          {...styles.subtitle}
          data-swiper-parallax="-100"
          data-swiper-parallax-duration="300"
        >
          {subtitle}
        </dd>
      </dl>
    </div>
  );
};
