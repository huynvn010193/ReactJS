import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import Title from './Title';

class App extends Component {
  render() {
    return (
        <Router>
            <div class="container">
                <Title/>
            </div>
        </Router>
    )
    }
}

export default App;
