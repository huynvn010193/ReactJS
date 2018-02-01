import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
    // Viết theo kiểu ES6 => ko cần khai báo kiểu function
    /*formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }*/
    showButtonFree()
    {
        const isFree = this.props.free;
        if(isFree === true)
        {
            return <div className="panel-footer">
                        <button type="button" className="btn btn-warning">view</button>
                    </div>;
        }
    }
    render() {
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.props.name}</h3>
                        </div>
                        <div className="panel-body">
                            <p>{this.props.time}</p>
                            <p>{this.props.children}</p>
                            <ul className="list-group">
                                <Lesson />
                                <Lesson />
                                <Lesson />
                                <Lesson />
                            </ul>
                        </div>
                        {this.showButtonFree()}
                    </div>
                </div>
            </div>
        );
    }
}
export default Course;