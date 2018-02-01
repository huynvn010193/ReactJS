import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
    // Viết theo kiểu ES6 => ko cần khai báo kiểu function
    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
        };

        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">ReactJS</h3>
                        </div>
                        <div className="panel-body">
                            {this.formatName(user)}
                            <ul className="list-group">
                                <Lesson />
                                <Lesson />
                                <Lesson />
                                <Lesson />
                            </ul>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-success">register</button>
            </div>
        );
  }
}

export default Course;