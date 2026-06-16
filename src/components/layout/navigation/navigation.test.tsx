import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Navigation } from './navigation';

// Mock react-responsive
vi.mock('react-responsive', () => ({
  useMediaQuery: () => false,
}));

describe('Navigation', () => {
  it("correctly applies display: 'none' style to the 'home' navigation link", () => {
    const mockLink = vi.fn((props) => (
      <a href={`#${props.id}`} style={props.style} data-testid={`link-${props.id}`}>
        {props.id}
      </a>
    ));

    render(<Navigation Link={mockLink} />);

    // Find the call where id === 'home'
    const homeCall = mockLink.mock.calls.find((call) => call[0].id === 'home');

    expect(homeCall).toBeDefined();
    expect(homeCall![0].style).toEqual({ display: 'none' });

    // Verify other links don't have the display: none style
    const otherCalls = mockLink.mock.calls.filter((call) => call[0].id !== 'home');
    otherCalls.forEach((call) => {
      expect(call[0].style).toBeUndefined();
    });
  });
});
