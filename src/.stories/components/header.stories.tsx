import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { type TopicId, topicTitles } from '@lib/site';

import { decorators } from '../decorators';

const Section = ({ id, color }: { id: TopicId; color: string }) => {
  return (
    <section id={id} style={{ height: '100vh', backgroundColor: color }}>
      <h1>{topicTitles[id]}</h1>
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
  decorators,
};

export default meta;

export const Header: StoryObj<typeof Home.Header> = {};
