import React, { Component } from 'react';
import { tasksCompletedRef, taskRef } from './../firebase';

import * as notify from './../constants/Notify';

class TaskDoingItem extends Component {

  handleComplete = (item) => {
    // Remove tasks
    taskRef.child(item.key).remove();
    
    // Add TasksComplete
    tasksCompletedRef.push(item);

    // Show notifycation complete task
    this.props.changeNotify(notify.NOTI_TYPE_DANGER,notify.NOTI_COMPLETED_TASK_TITLE,notify.NOTI_COMPLETED_TASK_MESSAGE);
  }

  render() {
    let item = {name: '', email: ''};
    item = (this.props.item !== undefined) ? this.props.item : item; 

    return(
      <li className="list-group-item">
        <p className="task">{item.name}</p>
          <span className="author">
            <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{item.email}
          </span>
        <button onClick={() => this.handleComplete(item)} type="button" className="btn btn-warning btn-xs">Completed</button>
      </li>
    );
  }
}

export default TaskDoingItem;