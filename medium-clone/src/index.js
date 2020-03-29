import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import Topbar from 'components/topbar'

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
