import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router} from 'react-router-dom'
import {CurrentUserProvider} from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

import Routes from 'routes'
import Topbar from 'components/topbar'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
