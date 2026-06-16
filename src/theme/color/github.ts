import { buildTheme } from '@lib/css';
import { VAR_PREFIX_COLOR as varPrefix } from '@theme/common';

type GithubColor = 'fill' | 'color';

const themeValues: Record<GithubColor, string> = {
  fill: '#FFF',
  color: '#151513',
};

export const github = buildTheme<GithubColor>(themeValues, varPrefix);
