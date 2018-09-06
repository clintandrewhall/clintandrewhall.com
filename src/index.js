import './css/base.css';
import './css/fonts.css';
import './css/grid.css';
import './css/main.css';

import React from 'react';
import { render } from 'react-snapshot';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
