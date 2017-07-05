import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'tachyons'
import { Provider } from 'react-redux'

import createStore from './redux/createStore'
import App from './App'

const store = createStore()

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

renderComponent(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App.js', () => {
    const nextApp = require('./App.js').default
    renderComponent(nextApp)
  })
}
