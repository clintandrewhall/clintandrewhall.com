import React from 'react';
import { render } from 'react-snapshot';

import './css/base.css';
import './css/fonts.css';
import './css/grid.css';
import './css/main.css';
import App from './App';

import { unregister } from './registerServiceWorker';

render(<App />, document.getElementById('root'));
unregister();
