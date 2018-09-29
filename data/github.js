// @flow
import fs from 'fs';
import fetch from 'node-fetch';

const BASE_URL = 'https://api.github.com/users/';
const username = 'clintandrewhall';
const writePath = './src/_content/github/';

const userAPI = BASE_URL + username;
const reposAPI = `${BASE_URL + username}/repos`;

const values = <T>(obj: { [string]: T }): Array<T> =>
  Object.keys(obj).map(k => obj[k]);

(async function get() {
  const responses = await Promise.all([fetch(userAPI), fetch(reposAPI)]);
  const jsons = await Promise.all(responses.map(result => result.json()));
  const user = jsons[0];
  const repos = jsons[1];

  if (repos.message || user.message) {
    return;
  }

  const repoReponses = await Promise.all(
    repos.map((repo: Object) => fetch(repo.languages_url)),
  );

  const languages = await Promise.all(
    repoReponses.map(result => result.json()),
  );

  const entries = {};

  repos.forEach((repo: Object, index: number) => {
    Object.entries(languages[index]).forEach(entry => {
      const name = entry[0];
      const loc = entry[1];
      const item = entries[name] || { name, loc: 0 };
      item.loc += parseInt(loc, 10) || 0;
      entries[name] = item;
    });
  });

  const loc = values(entries).sort((a: Object, b: Object) => b.loc - a.loc);

  const result = { user, loc };

  fs.writeFile(
    `${writePath}index.js`,
    `// @flow
    const code: GitHub = ${JSON.stringify(result)};
    export default code;`,
    () => {
      // eslint-disable-next-line no-console
      console.log('wrote github');
    },
  );
})();
