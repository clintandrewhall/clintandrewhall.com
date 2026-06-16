import { loc, user } from '@content/github.json';

import { LOC } from './loc';
import { Numbers } from './numbers';

export const GithubStats = () => (
  <>
    <Numbers {...user} />
    <LOC loc={loc} />
  </>
);
