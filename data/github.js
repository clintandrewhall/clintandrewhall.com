// @flow
import fs from 'fs';
import fetch from 'node-fetch';

const BASE_URL = 'https://api.github.com/users/';
const username = 'clintandrewhall';
const writePath = './src/_content/github/';

const userAPI = BASE_URL + username;
const reposAPI = BASE_URL + username + '/repos';

(async function() {
  const responses = await Promise.all([fetch(userAPI), fetch(reposAPI)]);
  const jsons = await Promise.all(responses.map(result => result.json()));
  const user = jsons[0];
  let repos = jsons[1];

  if (repos.message || user.message) {
    console.log(repos.message);
    return;
  }

  fs.writeFile(
    writePath + 'index.js',
    'export default ' + JSON.stringify(jsons),
    () => {
      console.log('wrote github');
    },
  );
})();
