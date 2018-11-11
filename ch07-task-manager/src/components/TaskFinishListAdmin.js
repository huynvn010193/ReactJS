import React, { Component } from 'react';
import TaskFinishItemAdmin from './TaskFinishItemAdmin';
import { tasksCompletedRef } from './../firebase';
import * as notify from './../constants/Notify';

class TaskFinishListAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    tasksCompletedRef.on('value', items => {
      let data = [];
      items.forEach(item => {
        const { email,name } = item.val();
        data.push({email,name,key:item.key});
      });
      this.setState({
        items: data,
      });
    })
  }

  handleClear = () => {
    // Xóa hết các phần tử trong bảng => Phương thức set.
    tasksCompletedRef.set([]);
    this.props.changeNotify(notify.NOTI_TYPE_WARNING,notify.NOTI_CLEARALL_TASK_TITLE,notify.NOTI_CLEARALL_TASK_MESSAGE);
  }

  render() {
    let items = this.state.items;
    
    return(
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Task Finish</h3></div>
        <div className="panel-body">
          {this.showElementBody(items)}
        </div>
        <div className="panel-footer text-right">
          <button type="button" onClick={this.handleClear} className="btn btn-danger">Clear All</button>
        </div>
      </div>
    );
  }

  showElementBody = (items) => {
    let xhtml = null;
    if(items.length > 0) {
      xhtml = items.map((item,index) => {
        return(
          <TaskFinishItemAdmin item = {item} index={index} key={index} changeNotify={this.props.changeNotify}/>
        )  
      });
      return <ul className="list-group">{xhtml}</ul>
    }
    else{
      return <h4>...Loading</h4>
    }
  }
}

export default TaskFinishListAdmin;