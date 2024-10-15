import { config } from 'dotenv';
import * as fs from 'fs';

config();
const writePath = './src/content';

import type { Response } from 'node-fetch';
import fetch from 'node-fetch';

const BASE_URL = 'https://api.github.com/users/';
const username = 'clintandrewhall';

const userAPI = BASE_URL + username;
const reposAPI = `${BASE_URL + username}/repos`;

const values = (obj: { [key: string]: LinesOfCode }): LinesOfCode[] =>
  Object.keys(obj).map((k) => obj[k]);

const exclude = ['clintandrewhall.github.io', 'hero'];

export const getGithubData = async (token?: string) => {
  const headers = token
    ? {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    : {};

  const responses = await Promise.all([fetch(userAPI, headers), fetch(reposAPI, headers)]);
  const jsons = await Promise.all(responses.map((result) => result.json()));
  const user = jsons[0];
  const rawRepos = jsons[1];

  if (rawRepos.message || rawRepos.message) {
    console.log(rawRepos.message, user.message);
    return;
  }

  const repos = rawRepos
    .filter((repo: any) => !exclude.includes(repo.name))
    .filter((repo: any) => !repo.archived)
    .filter((repo: any) => repo.name === 'node-foursquare' || !repo.fork);

  const repoReponses: Response[] = await Promise.all(
    repos.map((repo: { languages_url: string }) => fetch(repo.languages_url, headers)),
  );

  const languages = await Promise.all(repoReponses.map((result) => result.json()));

  const entries: Record<string, LinesOfCode> = {};

  repos.forEach((repo: any, index: number) => {
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

  return { user, languages, loc, repos };
};

(async function get() {
  const result = await getGithubData(process.env.GITHUB_TOKEN);

  if (!result) {
    console.log('Github retrieval failed; aborting');
    return;
  }

  fs.writeFile(`${writePath}/github.json`, JSON.stringify(result), () => {
    console.log('wrote github');
  });
})();
