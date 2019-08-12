// @flow

import React from 'react';

import octocat from './octocat-spinner-128.gif';
import styles from './index.module.css';
import Stats from './Stats.js';
import LOC from './LOC.js';
import { getGithubData } from '../../../common/github';

import backup from './../../../_content/github';

type Props = {};
type State = {
  user: ?Object,
  live: boolean,
  loaded: boolean,
  loc: ?Array<Object>,
};

const githubBackup = (backup: GitHub);

class GithubCard extends React.Component<Props, State> {
  state = {
    user: githubBackup.user,
    loc: githubBackup.loc,
    live: false,
    loaded: false,
  };

  async componentDidMount() {
    const loaded = true;
    const results = await getGithubData();

    if (results) {
      const { user, loc } = results;
      // eslint-disable-next-line react/no-did-mount-set-state
      await this.setState({ user, loc, live: true, loaded });
      return;
    }

    // eslint-disable-next-line react/no-did-mount-set-state
    await this.setState({ loaded });
  }

  render() {
    const { user, loc, live, loaded } = this.state;

    if (!loaded) {
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
            {live ? 'are' : 'were'} gathered
            {live ? ' live, ' : ''} directly from my{' '}
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
  }
}

export default GithubCard;
