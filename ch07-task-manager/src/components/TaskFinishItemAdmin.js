import React, { Component } from 'react';

class TaskFinishItemAdmin extends Component {

  handeDelete = (key) => {
    console.log(key);
  }
  render() {
    let item = { name: '', email: '' };
    item = this.props.item !== undefined ? this.props.item : item;

    return (
      <li className="list-group-item">
        <p className="task">{item.name}</p>
        <span className="author">
          <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;
          {item.email}
        </span>
        <button type="button" onClick={() => this.handeDelete(item.key)} className="btn btn-danger btn-xs">Delete</button>
      </li>
    );
  }
}

export default TaskFinishItemAdmin;