import React from 'react';
import ReactDOM from 'react-dom';
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css';
import './assets/styles/main.scss';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
