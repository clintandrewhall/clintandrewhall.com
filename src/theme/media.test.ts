import { describe, expect, it } from 'vitest';

import { media } from './media';

describe('media', () => {
  it('decl.media.orientation.portrait generates the correct media query string', () => {
    expect(media.decl.orientation.portrait).toBe('@media (orientation: portrait)');
  });
});
