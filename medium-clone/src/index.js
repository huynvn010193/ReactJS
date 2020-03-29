import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'

const App = () => {
  return (
    <div className="App">
      <h3>Welcome here is our app</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
