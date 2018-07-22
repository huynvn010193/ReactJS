import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import routes from './../route-config';
import Title from './Title';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Title/>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <Menu />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            {this.showRoute(routes)}
          </div>
        </div>
      </Router>
    );
  }

  showRoute(routes) {
    let xhtml = null;
    if(routes.length > 0) {
      xhtml = routes.map(() => {
        <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
      });
    }
    return <Switch>{xhtml}</Switch>
  }
}

export default App;