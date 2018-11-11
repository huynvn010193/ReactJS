import React, { Component } from 'react';
import TaskFinishItem from './TaskFinishItem';
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
    
    return(
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Task Finish</h3></div>
        <div className="panel-body">
          {this.showElementBody(items)}
        </div>
      </div>
    );
  }

  showElementBody = (items) => {
    let xhtml = null;
    if(items.length > 0) {
      xhtml = items.map((item,index) => {  
        return(
          <TaskFinishItem item = {item} index={index} key={index}/>
        ) 
      });
      return <ul className="list-group">{xhtml}</ul>
    }
    else{
      return <h4>...Loading</h4>
    }
  }
}

export default TaskFinishList;