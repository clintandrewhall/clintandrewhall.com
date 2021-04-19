import fs from 'fs';
import { getGithubData } from '../src/common/github';

const writePath = './src/_content/github/';

(async function get() {
  const result = await getGithubData();

  if (!result) {
    // eslint-disable-next-line
    console.log('Github retrieval failed; aborting');
    return;
  }

  fs.writeFile(
    `${writePath}index.js`,
    `
    export const code = ${JSON.stringify(result)};
    export default code;`,
    () => {
      // eslint-disable-next-line no-console
      console.log('wrote github');
    },
  );
})();
