import React, { Component } from 'react';
import { NavLink,Route } from 'react-router-dom';

class Course extends Component {
    constructor(props) {
        super(props);
		this.state = {
           
        };
    }

    render() {
    	let {match} = this.props;

        return (
            <div>
                <h3>Course</h3>
                <div className="list-group">
                	<NavLink exact to={`${match.url}/angular`} activeClassName="active" className="list-group-item">Angular</NavLink>
                	<NavLink exact to={`${match.url}/reactjs`} activeClassName="active" className="list-group-item">ReactJS</NavLink>
                	<NavLink exact to={`${match.url}/nodejs`} activeClassName="active" className="list-group-item">NodeJS</NavLink>
                </div>
                <Route exact path="/course" render={() =>(
					<h3>Please select a course</h3>
                )} />
            </div>
        );
    }
}

export default Course;