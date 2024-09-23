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
      border-top: 1px solid var(${vars.color.background.subtle});
    }

    .swiper .swiper-pagination-bullets.swiper-pagination-horizontal {
      ${decl.color.background.subtle}
      display: inline-block;
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
  }
`;

export const root = toProps(css`
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

  padding-top: 0;
  padding-bottom: 0;
  padding-left: var(${vars.spacing.step9});
  padding-right: var(${vars.spacing.step9});
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: var(${vars.spacing.step9});
    height: 1px;
    top: 0;
  }

  &:before {
    left: 0;
    background-image: linear-gradient(
      to left,
      var(${vars.color.background.subtle}),
      var(${vars.color.background.dark})
    );
  }

  &:after {
    right: 0;
    background-image: linear-gradient(
      to right,
      var(${vars.color.background.subtle}),
      var(${vars.color.background.dark})
    );
  }
`);

const swiper = toProps(css`
  max-width: var(${vars.grid.maxWidth});
`);

export default { root, swiper };
