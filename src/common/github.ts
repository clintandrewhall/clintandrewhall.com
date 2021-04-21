import fetch from 'node-fetch';
import { Response } from 'node-fetch';

const BASE_URL = 'https://api.github.com/users/';
const username = 'clintandrewhall';

const userAPI = BASE_URL + username;
const reposAPI = `${BASE_URL + username}/repos`;

const values = (obj: { [key: string]: LinesOfCode }): LinesOfCode[] =>
  Object.keys(obj).map((k) => obj[k]);

export const getGithubData = async (token?: string) => {
  const headers = token
    ? {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    : {};
  const responses = await Promise.all([
    fetch(userAPI, headers),
    fetch(reposAPI, headers),
  ]);
  const jsons = await Promise.all(responses.map((result) => result.json()));
  const user = jsons[0];
  const repos = jsons[1];

  if (repos.message || user.message) {
    // eslint-disable-next-line no-console
    console.log(repos.message, user.message);
    return;
  }

  const repoReponses: Response[] = await Promise.all(
    repos.map((repo: { languages_url: string }) =>
      fetch(repo.languages_url, headers),
    ),
  );

  const languages = await Promise.all(
    repoReponses.map((result) => result.json()),
  );

  const entries: Record<string, LinesOfCode> = {};

  repos
    .filter((repo: any) => repo.name === 'node-foursquare' || !repo.fork)
    .forEach((repo: any, index: number) => {
      Object.entries(languages[index]).forEach((entry) => {
        const languageName = entry[0] as string;
        const linesOfCode = parseInt(entry[1] as string, 10) || 0;
        const item = entries[languageName] || {
          languageName,
          totalLines: 0,
          byProject: {},
        };
        item.totalLines += linesOfCode;
        item.byProject[repo.name] = linesOfCode;
        entries[languageName] = item;
      });
    });

  const loc: LinesOfCode[] = values(entries).sort(
    (a: LinesOfCode, b: LinesOfCode) => b.totalLines - a.totalLines,
  );

  loc.forEach((item) => {
    item.byProject = Object.entries(item.byProject)
      .sort(([, a], [, b]) => a - b)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  });

  return { user, loc };
};
