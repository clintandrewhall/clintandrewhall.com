import fetch from 'node-fetch';
import { Response } from 'node-fetch';
import { LOCType } from '../components/github/LOC';

const BASE_URL = 'https://api.github.com/users/';
const username = 'clintandrewhall';

const userAPI = BASE_URL + username;
const reposAPI = `${BASE_URL + username}/repos`;

const values = (obj: { [key: string]: LOCType }): Array<LOCType> =>
  Object.keys(obj).map((k) => obj[k]);

export const getGithubData = async () => {
  const responses = await Promise.all([fetch(userAPI), fetch(reposAPI)]);
  const jsons = await Promise.all(responses.map((result) => result.json()));
  const user = jsons[0];
  const repos = jsons[1];

  if (repos.message || user.message) {
    // eslint-disable-next-line no-console
    console.log(repos.message, user.message);
    return;
  }

  const repoReponses: Response[] = await Promise.all(
    repos.map((repo: { languages_url: string }) => fetch(repo.languages_url)),
  );

  const languages = await Promise.all(
    repoReponses.map((result) => result.json()),
  );

  const entries: { [key: string]: LOCType } = {};

  repos
    .filter((repo: any) => repo.name === 'node-foursquare' || !repo.fork)
    .forEach((_repo: any, index: number) => {
      Object.entries(languages[index]).forEach((entry) => {
        const name = entry[0] as string;
        const loc = entry[1] as string;
        const item = entries[name] || { name, loc: 0 };
        item.loc += parseInt(loc, 10) || 0;
        entries[name] = item;
      });
    });

  const loc: Array<LOCType> = values(entries).sort(
    (a: LOCType, b: LOCType) => b.loc - a.loc,
  );

  return { user, loc };
};
