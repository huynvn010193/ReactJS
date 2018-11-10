import React, { Component } from 'react';
import { taskRef } from './../firebase'; 
import * as notify from './../constants/Notify';

class FormAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    let { task } = this.state;
    taskRef.push({
      name: task,
      email: this.props.email
    });
    this.props.changeNotify(notify.NOTI_TYPE_SUCCESS,notify.NOTI_ADD_TASK_TITLE,notify.NOTI_ADD_TASK_MESSAGE);
    this.setState({task:''});
    event.preventDefault();    
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" value={this.state.task} onChange={this.handleChange} name="task" className="form-control" placeholder="Task" />
        </div>
        <button type="submit" className="btn btn-info">Add</button>
      </form>
    );
  }
}

export default FormAddTask;
