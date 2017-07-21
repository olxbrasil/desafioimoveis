import React from 'react'
import {render} from 'react-dom'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import {createStore, applyMiddleware} from 'redux'

import App from './containers/App'
import reducer from './redux/reducer'

const store = createStore(reducer, applyMiddleware(logger))

const renderApp = Root =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

renderApp(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const Root = require('./containers/App').default
    renderApp(Root)
  })
}
