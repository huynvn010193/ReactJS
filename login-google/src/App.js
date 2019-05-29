import React, { Component } from 'react';
import { GoogleLogin } from './google-login/index';
import './App.css';

class App extends Component {
  render() {
    const clientId = '617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com';

    const success = response => {
      console.log(response) // eslint-disable-line
    }
    
    const error = response => {
      console.error(response) // eslint-disable-line
    }
    
    const loading = () => {
      console.log('loading') // eslint-disable-line
    }
    
    const logout = () => {
      console.log('logout') // eslint-disable-line
    }
    return (
      <div className="App">
        <GoogleLogin onSuccess={success} onFailure={error} clientId={clientId} />
      </div>
    );
  }
}

export default App;
