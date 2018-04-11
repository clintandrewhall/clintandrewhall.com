// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'github-markdown-css';

import Home from './components/Home/index.js';

const postsContext = require.context(
  '!markdown-with-front-matter-loader!./_posts',
  false,
  /.md$/,
);

const posts = postsContext
  .keys()
  .reduce(
    (memo, fileName) =>
      memo.set(fileName.match(/.\/([^.]+).*/)[1], postsContext(fileName)),
    new Map(),
  );

console.log(posts);

const postIndex = posts => () => (
  <ul>
    {[...posts.keys()].map(path => (
      <li key={path}>
        <Link to={'/blog/' + path}>{posts.get(path).title || path}</Link>
      </li>
    ))}
  </ul>
);

const postWrapper = ({ __content }) => () => (
  <div>
    <Link to="/blog">« Back to blog</Link>
    <hr />
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: __content }}
    />
  </div>
);

// eslint-disable-next-line import/first
const reactRoutes = [
  <Route key="index" path="/blog" component={postIndex(posts)} />,
].concat(
  [...posts.keys()].map(path => (
    <Route
      key={path}
      path={'/blog/' + path}
      component={postWrapper(posts.get(path))}
    />
  )),
);

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home} exact={true} />
      {reactRoutes}
    </div>
  </Router>
);

export default App;
