import { Octokit } from '@octokit/rest';
import { config } from 'dotenv';
import * as fs from 'fs';

config();

const WRITE_PATH = './src/content';
const USERNAME = 'clintandrewhall';
const EXCLUDE = ['clintandrewhall.github.io', 'hero'];

const values = (obj: { [key: string]: LinesOfCode }): LinesOfCode[] =>
  Object.keys(obj).map((k) => obj[k]);

export const getGithubData = async (auth?: string) => {
  const octokit = new Octokit({ auth });
  const {
    data: { followers, following, public_gists, public_repos },
  } = await octokit.users.getByUsername({ username: USERNAME });
  const { data: allRepos } = await octokit.repos.listForUser({ username: USERNAME });

  const repos = allRepos
    .filter((repo: any) => !EXCLUDE.includes(repo.name))
    .filter((repo: any) => !repo.archived)
    .filter((repo: any) => repo.name === 'node-foursquare' || !repo.fork);

  const languages = await Promise.all(
    repos.map(({ name: repo }) =>
      octokit.repos.listLanguages({ owner: USERNAME, repo }).then((r) => r.data),
    ),
  );

  const locByRepo: Record<string, LinesOfCode> = {};
  const repoInfo: Record<string, RepoInformation> = {};

  repos.forEach(
    (
      {
        name,
        full_name: fullName,
        html_url: url,
        size,
        stargazers_count: stargazers,
        watchers_count: watchers,
        language,
      },
      index,
    ) => {
      repoInfo[name] = {
        name,
        fullName,
        url,
        size: size || 0,
        stargazers: stargazers || 0,
        watchers: watchers || 0,
        language: language || 'None',
      };

      Object.entries(languages[index]).forEach(([languageName, linesOfCode]) => {
        const item = locByRepo[languageName] || {
          languageName,
          totalLines: 0,
          byProject: {},
        };
        item.totalLines += linesOfCode;
        item.byProject[name] = linesOfCode;
        locByRepo[languageName] = item;
      });
    },
  );

  const loc: LinesOfCode[] = values(locByRepo).sort(
    (a: LinesOfCode, b: LinesOfCode) => b.totalLines - a.totalLines,
  );

  loc.forEach((item) => {
    item.byProject = Object.entries(item.byProject)
      .sort(([, a], [, b]) => (a ?? 0) - (b ?? 0))
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  });

  return {
    user: { followers, following, gists: public_gists, repos: public_repos },
    repos: repoInfo,
    loc,
  };
};

(async function get() {
  const result = await getGithubData(process.env.GITHUB_TOKEN);

  if (!result) {
    console.log('Github retrieval failed; aborting');
    return;
  }

  fs.writeFile(`${WRITE_PATH}/github.json`, JSON.stringify(result), () => {
    console.log('wrote github');
  });
})();
