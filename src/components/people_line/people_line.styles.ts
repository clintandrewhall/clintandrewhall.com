import { css as csl } from '@linaria/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
csl`
  :global() {
    .swiper {
      border-top: 1px solid var(${vars.color.border.subtle});
    }

    .swiper .swiper-pagination-bullets.swiper-pagination-horizontal {
      ${decl.color.background.subtle}
      display: flex;
      justify-content: center;
      align-items: center;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      height: 22px;
      padding: 2px 0;
      line-height: 17px;
    }

    .swiper-pagination-bullets:before,
    .swiper-pagination-bullets:after {
      content: '';
      ${decl.color.background.subtle}
      top: 0;
      bottom: 0;
      height: 22px;
      width: 22px;
      position: absolute;
    }

    .swiper-pagination-bullets:before {
      left: -22px;
      border-radius: 50% 0 0 50%;
    }

    .swiper-pagination-bullets:after {
      right: -22px;
      border-radius: 0 50% 50% 0;
    }

    /* Storybook-only: simulate non-JS behavior when an ancestor adds .simulate-no-js */
    .simulate-no-js .peopleline .swiper {
      overflow-x: auto;
      padding-inline: var(--peopleline-gap, 10px);
    }

    .simulate-no-js .peopleline .swiper-wrapper {
      transform: none !important;
      width: max-content !important;
      display: grid !important;
      grid-auto-flow: column !important;
      grid-auto-columns: var(--peopleline-slide-width, 100%) !important;
      gap: var(--peopleline-gap, 10px) !important;
    }

    @media (min-width: 975px) {
      .simulate-no-js .peopleline .swiper-wrapper {
        grid-auto-columns: calc((100% - var(--peopleline-gap, 10px)) / 2) !important;
      }
      .simulate-no-js .peopleline .swiper-slide {
        width: calc((100% - var(--peopleline-gap, 10px)) / 2) !important;
      }
    }

    .simulate-no-js .peopleline .swiper-slide {
      width: var(--peopleline-slide-width, 100%) !important;
      scroll-snap-align: start;
      flex: 0 0 auto;
    }

    .simulate-no-js .peopleline .swiper-button-prev,
    .simulate-no-js .peopleline .swiper-button-next,
    .simulate-no-js .peopleline .swiper-pagination {
      display: none !important;
    }
  }
`;

export const root = toProps(css`
  --peopleline-gap: 10px;
  --peopleline-slide-width: 100%;

  --swiper-theme-color: var(${vars.color.background.light});
  --swiper-navigation-size: var(${vars.spacing.step6});
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 0;
  --swiper-navigation-color: var(--swiper-theme-color);
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: auto;
  --swiper-pagination-bottom: 0;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: var(${vars.color.border.grid});
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-inactive-color: var(${vars.color.background.subtlest});
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;

  padding-bottom: 0;
  padding-left: var(${vars.spacing.step9});
  padding-right: var(${vars.spacing.step9});
  padding-top: 0;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    width: var(${vars.spacing.step9});
  }

  &:before {
    background-image: linear-gradient(
      to left,
      var(${vars.color.background.subtle}),
      var(/* ${vars.color.background.light}:8 */)
    );
    left: 0;
  }

  &:after {
    background-image: linear-gradient(
      to right,
      var(${vars.color.background.subtle}),
      var(/* ${vars.color.background.light}:10 */)
    );
    right: 0;
  }
`);

const swiper = toProps(css`
  max-width: var(${vars.grid.maxWidth});

  /* Base non-JS fallback: make Swiper act like a native scroll-snap scroller */
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding-inline: var(--peopleline-gap, 10px);
  scroll-padding-inline: var(--peopleline-gap, 10px);
  scroll-snap-type: x proximity;

  /* Swiper DOM structure fallback (non-JS): use flex with fixed bases */
  .swiper-wrapper {
    display: flex;
    gap: var(--peopleline-gap, 10px);
    transform: none;
  }

  .swiper-slide {
    /* 1 per view by default */
    flex: 0 0 var(--peopleline-slide-width, 100%);
    scroll-snap-align: start;
  }

  /* Match Swiper breakpoint that shows 2 slides >= 975px */
  @media (min-width: 975px) {
    .swiper-slide {
      /* 2 per view when wide */
      flex: 0 0 calc((100% - var(--peopleline-gap, 10px)) / 2);
    }
  }
`);

/* When JS enhances with Swiper, disable native scroll-snap to avoid conflicts */
export const enhanced = toProps(css`
  .swiper {
    padding-inline: 0;
    scroll-padding-inline: 0;
    scroll-snap-type: none;
  }

  .swiper-wrapper {
    display: flex;
    width: 100% !important;
  }
`);

export default { root, swiper, enhanced };
