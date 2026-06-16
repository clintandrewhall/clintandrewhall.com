export interface PersonProps {
  quote: string;
  name: string;
  title: string;
  subtitle: string;
  imageKey: string;
}

import { useAvatar } from '@lib/hooks';

import styles from './person.styles';

export const Person = ({ name, quote, subtitle, title, imageKey }: PersonProps) => {
  const avatarSrc = useAvatar(imageKey);
  const avatar = avatarSrc ? (
    <img src={avatarSrc.src} alt={name} loading="lazy" decoding="async" {...styles.avatar} />
  ) : null;

  return (
    <div {...styles.root}>
      {avatar}
      <blockquote {...styles.quote}>{quote}</blockquote>
      <dl {...styles.details}>
        <dt key="title_name">Name</dt>
        <dd key="value_name" {...styles.name}>
          {name}
        </dd>
        <dt key="title_title">Title</dt>
        <dd key="value_title" {...styles.title}>
          {title}
        </dd>
        <dt key="title_subtitle">Subtitle</dt>
        <dd key="value_subtitle" {...styles.subtitle}>
          {subtitle}
        </dd>
      </dl>
    </div>
  );
};
