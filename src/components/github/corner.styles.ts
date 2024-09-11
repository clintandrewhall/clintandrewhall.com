import { csa, cx, toProps } from '@/lib/css';

const svgRoot = toProps(csa`
  fill: #fff;
  color: #151513;
`);

const root = toProps(csa`
  position: fixed;
  top: 0;
  border: 0;
  z-index: 1000;
  right: 0;

  &:hover .octoArm {
    animation: octocat-wave 560ms ease-in-out;
  }
`);

const octoArm = toProps(
  cx(
    'octoArm',
    csa`
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
      transform-origin: 130px 106px;
    `,
  ),
);

export default { root, svgRoot, octoArm };
