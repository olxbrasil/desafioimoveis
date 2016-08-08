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
    const NextApp = require('./components/App').default;

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
