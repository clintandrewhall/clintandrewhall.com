import { toProps } from '@/lib/css';
import { theme } from '@/theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Theme/Icons',
};

export default meta;

const { icons } = theme;

export const Icons: StoryObj = {
  render: () => (
    <ul>
      <li>
        <i {...toProps(icons.link())} />
      </li>
    </ul>
  ),
};
