import type { Meta, StoryObj } from '@storybook/react-vite';

import { css } from '@lib/css';
import { theme } from '@theme';

import { Button } from '@components/button';

import { decorators } from '../decorators';

const meta: Meta = {
  title: 'Components/Button',
  decorators,
};

export default meta;

const lightStage = css`
  ${theme.decl.color.background.surface}
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 48px;
`;

const darkStage = css`
  ${theme.decl.color.background.inverse}
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 48px;
`;

export const Primary: StoryObj = {
  render: () => (
    <div className={lightStage}>
      <Button variant="primary" to="/#portfolio">
        View my portfolio
      </Button>
      <Button variant="primary" href="https://example.com">
        External link
      </Button>
      <Button variant="primary" onClick={() => {}}>
        Native button
      </Button>
    </div>
  ),
};

export const Secondary: StoryObj = {
  render: () => (
    <div className={darkStage}>
      <Button variant="secondary" to="/#about">
        More About Me
      </Button>
      <Button variant="secondary" to="/#portfolio">
        Latest Projects
      </Button>
    </div>
  ),
};

export const Icon: StoryObj = {
  render: () => (
    <div className={lightStage}>
      <Button variant="icon" aria-label="Previous">
        <span aria-hidden="true">‹</span>
      </Button>
      <Button variant="icon" aria-label="Next">
        <span aria-hidden="true">›</span>
      </Button>
      <Button variant="icon" aria-label="Disabled" disabled>
        <span aria-hidden="true">‹</span>
      </Button>
    </div>
  ),
};

export const AllVariants: StoryObj = {
  render: () => (
    <>
      <div className={lightStage}>
        <Button variant="primary" to="/#portfolio">
          Primary
        </Button>
        <Button variant="icon" aria-label="Icon">
          <span aria-hidden="true">›</span>
        </Button>
      </div>
      <div className={darkStage}>
        <Button variant="secondary" to="/#portfolio">
          Secondary
        </Button>
      </div>
    </>
  ),
};
