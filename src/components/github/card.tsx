import { useEffect, useState } from 'react';

import { GithubStats } from './stats';
import { GithubLinesOfCode } from './lines_of_code';

import octocat from '../../images/octocat-spinner-128.svg';
import styles from './card.module.css';

export const GithubCard = () => {
  const [user, setUser] = useState(null);
  const [loc, setLOC] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch('/github.json');
      const results = await response.json();

      if (results) {
        const { user, loc } = results;
        setUser(user);
        setLOC(loc);
      }

      setIsLoaded(true);
    })();
  }, []);

  if (!isLoaded) {
    return (
      <div className={styles.octocat}>
        <img src={octocat} alt="Loading" height="64" width="64" />
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <p className={styles.summary}>
          These lines-of-code counts and repository information are gathered
          directly from my{' '}
          <a
            href="https://www.github.com/clintandrewhall"
            rel="noopener noreferrer"
            target="_blank">
            Github account
          </a>
          .
        </p>
        <GithubStats user={user} />
        <GithubLinesOfCode loc={loc} />
      </div>
    </div>
  );
};
