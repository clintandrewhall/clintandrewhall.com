import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
// import Pace from 'pace-js';
// import registerServiceWorker from './registerServiceWorker';
// Pace.start();

// Pace.on('done', function() {
//   var event = new Event('pace-finished');
//   window.dispatchEvent(event);
// });
import { unregister } from './registerServiceWorker';
unregister();

render(<App />, document.getElementById('root'));
// registerServiceWorker();
