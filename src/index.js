import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from './containers/App'

const renderApp = () =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )

renderApp()

if (module.hot) {
  module.hot.accept('./containers/App', renderApp)
}
