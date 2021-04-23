import { Route } from 'react-router-dom';
import marked from 'marked';
import {
  Portfolio,
  PortfolioEntry,
  PortfolioItem,
  PortfolioItemType,
} from '../components/portfolio';

interface Front extends PortfolioItemType {
  __content: string;
}

export const routes = () => {
  const portfolioContext = require.context(
    '!markdown-with-front-matter-loader!./../content/portfolio',
    false,
    /.md$/,
  );

  const entries = portfolioContext.keys().reduce((memo, fileName) => {
    const obj = portfolioContext(fileName);
    const entry = { ...obj, __content: marked(obj.__content) } as Front;
    const match = fileName.match(/.\/([^.]+).*/);

    if (match) {
      memo[match[1]] = entry;
    }

    return memo;
  }, {} as Record<string, PortfolioItemType>);

  function getPortfolio() {
    return (
      <Portfolio>
        {[...Object.keys(entries)]
          .sort((a, b) =>
            entries[a].timestamp < entries[b].timestamp ? 1 : -1,
          )
          .map((path) => {
            return <PortfolioItem item={entries[path]} key={path} />;
          })}
      </Portfolio>
    );
  }

  return [
    <Route
      key="index"
      path="/portfolio"
      exact={true}
      component={getPortfolio}
    />,
  ].concat(
    [...Object.keys(entries)].map((path) => {
      const entry = entries[path];
      return (
        <Route
          key={path}
          path={'/portfolio/' + entry?.slug}
          component={() => <PortfolioEntry entry={entry} />}
        />
      );
    }),
  );
};
