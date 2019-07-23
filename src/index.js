import React from 'react';
import { render } from 'react-dom';

import './css/base.css';
import './css/fonts.css';
import './css/grid.css';
import './css/main.css';
import App from './App';

import { unregister } from './registerServiceWorker';

const rootElement = document.getElementById('root');
render(<App />, rootElement);

unregister();
