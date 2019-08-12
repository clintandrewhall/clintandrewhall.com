// @flow
import fs from 'fs';
import { getGithubData } from '../src/common/github';
const writePath = './src/_content/github/';

(async function get() {
  const result = await getGithubData();

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
