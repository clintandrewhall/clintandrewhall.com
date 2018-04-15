// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import 'github-markdown-css';

import Home from './components/Home/index.js';
//
// // $FlowFixMe
// const portfolioContext = require.context(
//   '!markdown-with-front-matter-loader!./_content/portfolio',
//   false,
//   /.md$/,
// );
//
// const entries = portfolioContext
//   .keys()
//   .reduce(
//     (memo, fileName) =>
//       memo.set(fileName.match(/.\/([^.]+).*/)[1], portfolioContext(fileName)),
//     new Map(),
//   );
//
// console.log(entries);
//
// const entryIndex = entries => () => (
//   <ul>
//     {[...entries.keys()].map(path => {
//       const entry = entries.get(path);
//       const { title, slug } = entry;
//       console.log(title, slug);
//
//       return (
//         <li key={path}>
//           <Link to={'/portfolio/' + path}>{title || slug}</Link>
//         </li>
//       );
//     })}
//   </ul>
// );
//
// const entryWrapper = ({ __content }) => () => (
//   <div>
//     <Link to="/portfolio">« Back to Portfolio</Link>
//     <hr />
//     <div
//       className="markdown-body"
//       dangerouslySetInnerHTML={{ __html: __content }}
//     />
//   </div>
// );
//
// // eslint-disable-next-line import/first
// const reactRoutes = [
//   <Route key="index" path="/portfolio" component={entryIndex(entries)} />,
// ].concat(
//   [...entries.keys()].map(path => {
//     const entry = entries.get(path);
//     return (
//       <Route
//         key={path}
//         path={'/portfolio/' + entry.slug}
//         component={entryWrapper(entry)}
//       />
//     );
//   }),
// );

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home} exact={true} />
    </div>
  </Router>
);

export default App;
