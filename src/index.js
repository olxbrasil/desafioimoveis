import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
