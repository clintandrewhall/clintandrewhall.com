import type { Meta, StoryObj } from '@storybook/react';

import { Home } from '@home';
import { type SectionId, sectionTitles } from '@lib/site';

const Section = ({ id, color }: { id: SectionId; color: string }) => {
  return (
    <section id={id} style={{ height: '100vh', backgroundColor: color }}>
      <h1>{sectionTitles[id]}</h1>
    </section>
  );
};

const meta: Meta<typeof Home.Header> = {
  title: 'Home/Header',
  component: Home.Header,
  render: () => {
    return (
      <>
        <Home.Header />
        <Section id="home" color="black" />
        <Section id="about" color="lightblue" />
        <Section id="portfolio" color="lightgray" />
        <Section id="career" color="lightblue" />
        <Section id="medium" color="lightgray" />
      </>
    );
  },
};

export default meta;

export const Header: StoryObj<typeof Home.Header> = {};
