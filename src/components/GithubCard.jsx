// @flow

import React from 'react';
import numeral from 'numeral';

import octocat from './images/octocat-spinner-128.gif';
import styles from './GithubCard.module.css';
import languageColors from './lib/github-language-colors';

type LOC = { name: string, loc: number };
type Props = {};
type State = {
  user: ?Object,
  repos: ?Object,
  totalLoc: ?Array<Object>,
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
    user: null,
    repos: null,
    totalLoc: null,
  };

  async componentDidMount() {
    const responses = await Promise.all([fetch(userAPI), fetch(reposAPI)]);
    const jsons = await Promise.all(responses.map(result => result.json()));
    const user = jsons[0];
    let repos = jsons[1];

    const repoReponses = await Promise.all(
      repos.map((repo: Object) => fetch(repo.languages_url)),
    );

    const languages = await Promise.all(
      repoReponses.map(result => result.json()),
    );

    let totalLocEntries = {};

    repos.forEach((repo: Object, index: number) => {
      Object.entries(languages[index]).forEach(entry => {
        const name = entry[0];
        const loc = entry[1];
        let item = totalLocEntries[name] || { name, loc: 0 };
        item.loc += parseInt(loc, 10) || 0;
        totalLocEntries[name] = item;
      });
    });

    const totalLoc = values(totalLocEntries).sort(function(a: LOC, b: LOC) {
      return b.loc - a.loc;
    });

    await this.setState({ user, repos, totalLoc });
  }

  render() {
    const { user, totalLoc, repos } = this.state;
    let content = null;

    if (user === null || repos === null) {
      return (
        <div className={styles.octocat}>
          <img src={octocat} alt="Loading" />
        </div>
      );
    } else {
      if (totalLoc) {
        let total = 0;

        totalLoc.forEach((language: LOC) => {
          total += language.loc;
        });

        let items = totalLoc.map((language: LOC, index: number) => {
          const { name, loc } = language;
          const color = languageColors[name] || 'inherit';

          return (
            <li
              className={styles.language}
              key={'lang_' + index}
              style={{ color }}>
              <div
                className={styles.progress}
                style={{
                  background: color,
                  width: loc / total * 100 + '%',
                }}
              />
              <span className={styles.loc}>{numeral(loc).format('0a')}</span>
              <span className={styles.languageName}>{name}</span>
            </li>
          );
        });

        if (items.length > 0) {
          items = (
            <ul className={styles.languages} key="languages">
              {items.slice(0, 10)}
            </ul>
          );
        }
        content = [items];
      }
    }

    return (
      <div className={styles.gh}>
        <div className={styles.card}>
          <p>
            These lines-of-code counts and repository information are gathered
            live, directly from my{' '}
            <a
              href="https://www.github.com/clintandrewhall"
              rel="noopener noreferrer"
              target="_blank">
              Github account
            </a>.
          </p>
          {content}
        </div>
      </div>
    );
  }
}

export default GithubCard;
