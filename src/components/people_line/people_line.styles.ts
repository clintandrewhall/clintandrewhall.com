import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';
import { css } from '@linaria/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { vars } = theme;

css`
  :global() {
    .swiper .swiper-pagination-bullets.swiper-pagination-horizontal {
      background-color: rgba(255, 255, 255, 0.25);
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
      background-color: rgba(255, 255, 255, 0.25);
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

export const root = toProps(csa`
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

  border-top: 1px solid var(${vars.color.background.subtle});
  padding: 0 var(${vars.spacing.step9});
  position: relative;

  &:before, 
  &:after {
    position: absolute;
    content: '';
    display: block;
    top: -1px;
    width: var(${vars.spacing.step8});
    height: 1px;
  }

  &:before {
    left: calc(var(${vars.spacing.step8}) * -1);
    background: linear-gradient(
      to left, var(${vars.color.background.subtle}), var(${vars.color.background.dark})
    );
  }

  &:after {
    right: calc(var(${vars.spacing.step8}) * -1);
    background: linear-gradient(
      to right, var(${vars.color.background.subtle}), var(${vars.color.background.dark})
    );
  }
`);

const swiper = toProps(csa`
  max-width: var(${vars.grid.maxWidth});
`);

export default { root, swiper };
