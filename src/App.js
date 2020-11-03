import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import history from '~/routes/history'
import GlobalStyle from '~/styles/global'

import Routes from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  )
}

export default App
