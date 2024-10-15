import { GithubStats } from '@components/github';

import styles from './about.styles';

export const Code = () => {
  return (
    <section {...styles.code}>
      <h3 {...styles.title}>About My Code</h3>
      <div {...styles.content}>
        <p>
          These lines-of-code counts and repository information are gathered directly from my{' '}
          <a href="https://www.github.com/clintandrewhall">Github account</a>.
        </p>
        <GithubStats />
      </div>
    </section>
  );
};
