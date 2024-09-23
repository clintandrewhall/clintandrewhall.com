import { css, cx, toProps } from '@lib/css';

const svgRoot = toProps(css`
  color: #151513;
  fill: #fff;
`);

const root = toProps(css`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

  &:hover .octoArm {
    animation: octocat-wave 560ms ease-in-out;
  }
`);

const octoArm = toProps(
  cx(
    'octoArm',
    css`
      transform-origin: 130px 106px;
      @keyframes octocat-wave {
        0%,
        100% {
          transform: rotate(0);
        }

        20%,
        60% {
          transform: rotate(-25deg);
        }

        40%,
        80% {
          transform: rotate(10deg);
        }
      }
    `,
  ),
);

export default { root, svgRoot, octoArm };
