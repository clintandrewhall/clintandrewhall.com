import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Pace from 'pace-js';
import registerServiceWorker from './registerServiceWorker';
// Pace.start();

// Pace.on('done', function() {
//   var event = new Event('pace-finished');
//   window.dispatchEvent(event);
// });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
