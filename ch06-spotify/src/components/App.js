import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';
import routes from './../route-config';

import Title from './Title';
import Breadcrumb from './Breadcrumb';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Title/>
                    <div className="row">
                        <Breadcrumb/>
                        {this.showRoute(routes)}
                    </div>
                </div>
            </Router>
        )
    }

    showRoute(routers)
    {
        let xhtml = null;
        if(routers.length > 0)
        {
            xhtml = routers.map((route,index) => {
                return(
                    <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
                )
            });
        }
        return <Switch>{xhtml}</Switch>
    }
}

export default App;
