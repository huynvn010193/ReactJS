import React, { Component } from 'react';
import TaskDoingItem from './TaskDoingItem';

class TaskDoingList extends Component {
  render() {
    return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Task Doing</h3></div>
        <div className="panel-body">
          <ul className="list-group">
            <TaskDoingItem />
            <TaskDoingItem />
          </ul>
        </div>
        <div className="panel-footer text-right">
          <form className="form-inline">
            <div className="form-group">
              <input type="text" defaultValue name="task" className="form-control" placeholder="Task" />
            </div>
            <button type="submit" className="btn btn-info">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskDoingList;
