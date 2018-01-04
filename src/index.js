// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Utilities
import registerServiceWorker from './js/utils/registerServiceWorker';
// Components
import App from './js/App';
// eslint-disable-next-line
import './css/app.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// registerServiceWorker();
