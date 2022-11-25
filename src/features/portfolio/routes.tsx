import { Route } from 'react-router-dom';
import { Portfolio, PortfolioEntry, PortfolioBlock } from './components';

export const getRoutes = () => {
  const portfolioContext = require.context(
    '../../content/portfolio',
    true,
    /.md$/,
  );

  const entries = portfolioContext.keys().reduce((memo, fileName) => {
    const obj = portfolioContext(fileName);

    if (obj && obj.attributes && obj.react) {
      const match = fileName.match(/.\/([^.]+).*/);

      if (match) {
        memo[match[1]] = {
          ...obj.attributes,
          react: obj.react,
        } as PortfolioEntry;
      }
    }
    return memo;
  }, {} as Record<string, PortfolioEntry>);

  function getPortfolio() {
    return (
      <Portfolio>
        {[...Object.keys(entries)]
          .sort((a, b) =>
            entries[a].timestamp < entries[b].timestamp ? 1 : -1,
          )
          .map((path) => {
            return <PortfolioBlock {...entries[path]} key={path} />;
          })}
      </Portfolio>
    );
  }

  return [
    <Route key="index" path="/portfolio" element={getPortfolio()} />,
    ...Object.keys(entries).map((path) => {
      const entry = entries[path];
      return (
        <Route
          key={path}
          path={'/portfolio/' + entry?.slug}
          element={<PortfolioEntry entry={entry} />}
        />
      );
    }),
  ];
};
