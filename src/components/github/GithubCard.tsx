import { useEffect, useState } from 'react';

import octocat from './octocat-spinner-128.gif';
import styles from './GithubCard.module.css';
import { Stats } from './Stats';
import { LOC } from './LOC';

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
        <img src={octocat} alt="Loading" />
      </div>
    );
  }

  return (
    <div className={styles.gh}>
      <div className={styles.card}>
        <p>
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
        <Stats user={user} />
        <LOC loc={loc} />
      </div>
    </div>
  );
};
