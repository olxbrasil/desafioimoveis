import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'tachyons'

import App from './App'

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Component />
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
