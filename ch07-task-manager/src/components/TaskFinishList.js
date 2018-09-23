import React, { Component } from 'react';
import TaskFinishItem from './TaskFinishItem';

class TaskFinishList extends Component {
  render() {
    return(
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Task Finish</h3></div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              <p className="task">CSS is too bad</p>
              <span className="author">
                <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;
                admin@gmail.com
              </span>
            </li>
            <li className="list-group-item">
              <p className="task">CSS error</p>
              <span className="author">
                <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;lthlan54@gmail.com</span>
              <span/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskFinishList;