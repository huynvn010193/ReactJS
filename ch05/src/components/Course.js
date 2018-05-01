import React, { Component } from 'react';
import { NavLink,Route } from 'react-router-dom';
import CourseItem from './CourseItem';

const menuCourses = [
    {to: '/angular', name:'Angular'},
    {to: '/reactjs', name:'ReactJS'},
    {to: '/nodejs', name:'NodeJS'}
]

class Course extends Component {
    constructor(props) {
        super(props);
		this.state = {
           
        };
    }

    render() {
    	let {match} = this.props;
        let url = match.url;
        return (
            <div>
                <h3>Course</h3>
                <div className="list-group">
                	{this.showMenu(url,menuCourses)}
                </div>
                <Route exact path={match.url} render={()=>(
                    <h3>Please select a course</h3>
                )}/>
                <Route path={`${match.url}/:name`} component={CourseItem}/>
            </div>
        );
    }

    showMenu(url,menus)
    {   
        let xhtml = null;
        if(menus.length > 0)
        {
            xhtml = menus.map((menu,index)=>{
                let urlCourse = url + menu.to;
                return (<NavLink key={index} exact to={urlCourse} activeClassName="active" className="list-group-item">
                            {menu.name}
                        </NavLink>
                );
            });
        }
        return xhtml;
    }
}

export default Course;