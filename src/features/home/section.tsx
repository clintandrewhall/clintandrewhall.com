import { PropsWithChildren } from 'react';
import type { Section as SectionType } from '../../lib';

import styles from './section.module.css';

type HomeSection = Exclude<SectionType, '' | 'home'>;

interface Props extends PropsWithChildren {
  section: HomeSection;
}

interface SectionInfo {
  title: string;
  subtitle: string;
  lead?: string;
  backgroundColor: '#fff' | '#f1f1f1';
}

const info: Record<HomeSection, SectionInfo> = {
  about: {
    title: 'About Me',
    subtitle: 'I Live for Experiences',
    backgroundColor: '#fff',
  },
  career: {
    title: 'Career',
    subtitle: 'Read About My Experience',
    lead: 'These are a few roles I&apos;ve held recently.',
    backgroundColor: '#fff',
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Explore My Projects',
    lead: 'Here are a few of the things I&apos;ve worked on in my spare time.',
    backgroundColor: '#f1f1f1',
  },
  medium: {
    title: 'Medium',
    subtitle: 'My Drips to The Firehose',
    lead: 'Sometimes I like to post notes or thoughts. Opinions are always my own.',
    backgroundColor: '#fff',
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What People Say',
    lead: 'I&apos;ve worked with some remarkable people.',
    backgroundColor: '#f1f1f1',
  },
};

export const Section = ({ children, section }: Props) => {
  const { title, subtitle, lead, backgroundColor } = info[section];
  return (
    <section
      id={section}
      className={styles.root}
      style={{
        backgroundColor,
      }}>
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
