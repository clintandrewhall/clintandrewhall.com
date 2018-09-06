import './css/base.css';
import './css/fonts.css';
import './css/grid.css';
import './css/main.css';

import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import { unregister } from './registerServiceWorker';

// import registerServiceWorker from './registerServiceWorker';
// Pace.on('done', function() {
//   var event = new Event('pace-finished');
//   window.dispatchEvent(event);
// });

render(<App />, document.getElementById('root'));
unregister();
// registerServiceWorker();
