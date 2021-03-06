// @flow
// eslint-ignore react/display-name

import React from 'react';
import { Route } from 'react-router-dom';
import marked from 'marked';
import yaml from 'yaml-front-matter';
import Portfolio from './../components/Portfolio';
import PortfolioItem from './../components/Portfolio/PortfolioItem';
import PortfolioEntry from './../components/Portfolio/PortfolioEntry';

const routes = (): Array<React$Node> => {
  // $FlowFixMe
  const portfolioContext = require.context(
    '!markdown-image-loader!./../_content/portfolio',
    false,
    /.md$/,
  );

  const entries = portfolioContext.keys().reduce((memo, fileName) => {
    const obj = yaml.parse(portfolioContext(fileName));
    obj.__content = marked(obj.__content);
    return memo.set(fileName.match(/.\/([^.]+).*/)[1], obj);
  }, new Map());

  const entryIndex = entries =>
    function getPortfolio() {
      return (
        <Portfolio>
          {[...entries.keys()].map(path => {
            return <PortfolioItem item={entries.get(path)} key={path} />;
          })}
        </Portfolio>
      );
    };

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

export default routes;
