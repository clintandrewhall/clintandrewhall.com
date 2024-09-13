import { loc, user } from '@content/github.json';

import { LOC } from './loc';
import { Numbers } from './numbers';

export const GithubStats = () => (
  <>
    <Numbers
      {...user}
      {...{
        gists: user.public_gists,
        repos: user.public_repos,
      }}
    />
    <LOC loc={loc} />
  </>
);
