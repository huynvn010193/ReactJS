import React, { Component } from 'react';
import { NavLink,Route } from 'react-router-dom';
import CourseItem from './CourseItem';

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
                <Route exact path={match.url} render={()=>(
                    <h3>Please select a course</h3>
                )}/>
                <Route path={`${match.url}/:name`} component={CourseItem}/>
            </div>
        );
    }
}

export default Course;