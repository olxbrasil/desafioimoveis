import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/es6/map';
import 'core-js/es6/set';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './container/store';
import registerServiceWorker from './registerServiceWorker';

const Store = configureStore();

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
