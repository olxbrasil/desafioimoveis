import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Home from './views/home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './assets/scss/reset.scss';
import './assets/scss/generals.scss';
import AllReducers from './framework/reducers';

const store = createStore(AllReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
