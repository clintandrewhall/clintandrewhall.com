import { useEffect, useState } from 'react';

import octocat from './octocat-spinner-128.gif';
import styles from './GithubCard.module.css';
import { Stats } from './Stats';
import { LOC } from './LOC';
import { getGithubData } from '../../common/github';

import githubBackup from './../../_content/github';

export const GithubCard = () => {
  const [user, setUser] = useState(githubBackup.user);
  const [loc, setLOC] = useState(githubBackup.loc);
  const [isLive, setIsLive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const results = await getGithubData();

      if (results) {
        const { user, loc } = results;
        setUser(user);
        setLOC(loc);
        setIsLive(true);
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
          These lines-of-code counts and repository information{' '}
          {isLive ? 'are' : 'were'} gathered
          {isLive ? ' live, ' : ''} directly from my{' '}
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
