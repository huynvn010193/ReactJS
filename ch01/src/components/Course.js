import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
  render() {
    return (
        <div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">ReactJS</h3>
                    </div>
                    <div className="panel-body">
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