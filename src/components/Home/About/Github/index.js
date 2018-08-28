// @flow

import React from 'react';

import octocat from './octocat-spinner-128.gif';
import styles from './index.module.css';
import Stats from './Stats.js';
import LOC from './LOC.js';

import backup from './../../../../_content/github';

type Props = {};
type State = {
  user: ?Object,
  live: boolean,
  loaded: boolean,
  loc: ?Array<Object>,
};

const username = 'clintandrewhall';
const userAPI = 'https://api.github.com/users/' + username;
const reposAPI = 'https://api.github.com/users/' + username + '/repos';

const values = <T>(obj: { [string]: T }): Array<T> =>
  Object.keys(obj).map(k => obj[k]);

// const url = 'https://www.github.com/' + username;
// var gistsURL = 'https://gist.github.com/' + username;
// var reposURL = 'https://github.com/' + username + '?tab=repositories';

class GithubCard extends React.Component<Props, State> {
  state = {
    user: backup.user,
    loc: backup.loc,
    live: false,
    loaded: false,
  };

  async componentDidMount() {
    const responses = await Promise.all([fetch(userAPI), fetch(reposAPI)]);
    const loaded = true;

    if (responses[0].ok && responses[1].ok) {
      const jsons = await Promise.all(
        responses.map(response => response.json()),
      );

      const user = jsons[0];
      const repos = jsons[1];

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

      await this.setState({ user, loc, live: true, loaded });
      return;
    }

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
              target="_blank"
            >
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
