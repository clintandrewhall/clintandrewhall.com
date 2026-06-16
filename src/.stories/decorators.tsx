import type { Decorator } from '@storybook/react-vite';

import { css } from '@lib/css';
import { theme } from '@theme';

export const decorators: Decorator[] = [
  (Story) => {
    return (
      <div
        className={css`
          ${theme.page.body}
          ${theme.definitions}
        `}
      >
        <Story />
      </div>
    );
  },
];
