import React, { Component } from 'react';
import TaskDoingItem from './TaskDoingItem';
import FormAddTask from './FormAddTask';
import { taskRef } from './../firebase';

class TaskDoingList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }

  // Trước khi bắt đầu render() => đổ dữ liệu vào
  componentWillMount(){
    taskRef.on('value', items => {
      let data = [];
      items.forEach(item =>{
        let { email,name } = item.val();
        data.push({ email,name });
      })
      this.setState({ items: data});
    });
  }

  render() {
    let { items } = this.state;
    console.log(items);

    return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Task Doing</h3></div>
        <div className="panel-body">
          <ul className="list-group">
            <TaskDoingItem />
            <TaskDoingItem />
            <TaskDoingItem />
          </ul>
        </div>
        <div className="panel-footer text-right">
          <FormAddTask/>
        </div>
      </div>
    );
  }
}

export default TaskDoingList;
