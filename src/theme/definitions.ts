import { css as csl } from '@linaria/core';

import { theme } from '@theme';

/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
csl`
  :global(:root) {
    ${Object.entries(theme.definitions)
      .map(([name, value]) => `${name}: ${value};`)
      .join('\n')}
  }
`;
