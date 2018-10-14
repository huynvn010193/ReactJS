import React, { Component } from 'react';
import TaskFinishItem from './TaskFinishItem';
import TaskFinishItemAdmin from './TaskFinishItemAdmin';
import { tasksCompletedRef } from './../firebase';

class TaskFinishList extends Component {
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
  render() {
    let items = this.state.items;
    let isAdmin = true;
    return(
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Task Finish</h3></div>
        <div className="panel-body">
          {this.showElementBody(items,isAdmin)}
        </div>
        <div className="panel-footer text-right">
          <button type="button" className="btn btn-danger">Clear All</button>
        </div>
      </div>
    );
  }

  showElementBody = (items,isAdmin) => {
    let xhtml = null;
    if(items.length > 0) {
      xhtml = items.map((item,index) => {
        if(isAdmin === true) {
          return(
            <TaskFinishItemAdmin item = {item} index={index} key={index}/>
          )
        }
        else {  
          return(
            <TaskFinishItem item = {item} index={index} key={index}/>
          ) 
        }
           
      });
      return <ul className="list-group">{xhtml}</ul>
    }
    else{
      return <h4>...Loading</h4>
    }
  }
}

export default TaskFinishList;