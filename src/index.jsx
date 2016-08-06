import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import 'material-design-lite/material.min.js';
import './style.scss';

const appState = new AppState();

render(
  <AppContainer>
    <MuiThemeProvider>
      <App appState={appState} />
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;

    render(
      <AppContainer>
        <MuiThemeProvider>
          <NextApp appState={appState} />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
