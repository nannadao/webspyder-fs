import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import './index.css'
import App from './App'
import makeStore from './redux/store'

const store = makeStore()

const WithProvider = () => (
  <Provider store={store}>
    <StylesProvider injectFirst>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </StylesProvider>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <WithProvider />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
