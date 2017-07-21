import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import {createStore, applyMiddleware} from 'redux'

import App from './containers/App'
import reducer from './redux/reducer'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  const {logger} = require('redux-logger')
  middlewares.push(logger)
}

const store = createStore(reducer, applyMiddleware(...middlewares))

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
