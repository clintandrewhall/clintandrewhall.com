// @flow
import fs from 'fs';
import fetch from 'node-fetch';

const BASE_URL = 'https://api.github.com/users/';
const username = 'clintandrewhall';
const writePath = './src/_content/github/';

const userAPI = BASE_URL + username;
const reposAPI = BASE_URL + username + '/repos';

const values = <T>(obj: { [string]: T }): Array<T> =>
  Object.keys(obj).map(k => obj[k]);

(async function() {
  const responses = await Promise.all([fetch(userAPI), fetch(reposAPI)]);
  const jsons = await Promise.all(responses.map(result => result.json()));
  const user = jsons[0];
  let repos = jsons[1];

  if (repos.message || user.message) {
    console.log(repos.message);
    return;
  }

  const repoReponses = await Promise.all(
    repos.map((repo: Object) => fetch(repo.languages_url)),
  );

  const languages = await Promise.all(
    repoReponses.map(result => result.json()),
  );

  let entries = {};

  repos.forEach((repo: Object, index: number) => {
    Object.entries(languages[index]).forEach(entry => {
      const name = entry[0];
      const loc = entry[1];
      let item = entries[name] || { name, loc: 0 };
      item.loc += parseInt(loc, 10) || 0;
      entries[name] = item;
    });
  });

  // FIXME: Using 'Object' is a bug; should be LOCType, but I'm getting a
  // Flow error.
  const loc = values(entries).sort(function(a: Object, b: Object) {
    return b.loc - a.loc;
  });

  const result = { user, loc };

  fs.writeFile(
    writePath + 'index.js',
    'export default ' + JSON.stringify(result),
    () => {
      console.log('wrote github');
    },
  );
})();
