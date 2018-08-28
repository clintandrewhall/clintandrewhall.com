// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import PortfolioItem from './../components/Portfolio/PortfolioItem';
import PortfolioEntry from './../components/Portfolio/PortfolioEntry';

export default (): Array<React$Node> => {
  const entryIndex = entries => () => (
    <ul>
      {[...entries.keys()].map(path => (
        <PortfolioItem item={entries.get(path)} />
      ))}
    </ul>
  );

  // $FlowFixMe
  const portfolioContext = require.context(
    '!markdown-with-front-matter-loader!./../_content/portfolio',
    false,
    /.md$/,
  );

  const entries = portfolioContext
    .keys()
    .reduce(
      (memo, fileName) =>
        memo.set(fileName.match(/.\/([^.]+).*/)[1], portfolioContext(fileName)),
      new Map(),
    );

  // eslint-disable-next-line import/first
  return [
    <Route
      key="index"
      path="/portfolio"
      exact={true}
      component={entryIndex(entries)}
    />,
  ].concat(
    [...entries.keys()].map(path => {
      const entry = entries.get(path);
      return (
        <Route
          key={path}
          path={'/portfolio/' + entry.slug}
          component={() => <PortfolioEntry entry={entry} />}
        />
      );
    }),
  );
};
