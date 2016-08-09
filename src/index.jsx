import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from 'components/App';
import 'styles/main.scss';

import store from './store/configureStore';

const rootEl = document.getElementById('root');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <AppContainer>
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line

    render(
      <AppContainer>
        <MuiThemeProvider>
          <Provider store={store}>
            <NextApp />
          </Provider>
        </MuiThemeProvider>
      </AppContainer>,
      rootEl
    );
  });
}
