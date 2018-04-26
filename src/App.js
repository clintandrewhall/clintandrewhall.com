// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import Home from './components/Home';
import routes from './routes';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home} exact={true} />
      {routes()}
    </div>
  </Router>
);

export default App;
