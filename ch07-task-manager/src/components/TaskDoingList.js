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
        console.log(item);
        
        let { email,name } = item.val();
        data.push({ email, name, key:item.key });
      })
      this.setState({ items: data});
    });
  }

  render() {
    let { items } = this.state;

    return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Task Doing</h3></div>
        <div className="panel-body">
          {this.showElementBody(items)}
        </div>
        <div className="panel-footer text-right">
        </div>
      </div>
    );
  }

  showElementBody = (items) => {
    let xhtml = null;
    if(items.length > 0) {
      xhtml = items.map((item,index) => {
        return (
          <TaskDoingItem index={index} item={item} key={index}/>
        )
      })
    }
    return <ul className="list-group">{xhtml}</ul>
  }

}

export default TaskDoingList;
