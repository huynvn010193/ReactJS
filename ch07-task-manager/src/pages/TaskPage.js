import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskDoingList from './../components/TaskDoingList';
import TaskFinishList from './../components/TaskFinishList';
import TaskFinishListAdmin from './../components/TaskFinishListAdmin';
import { actChangeNotify } from './../actions/index';

class TaskPage extends Component {
  render () {
    let { user, changeNotify } = this.props;
    let { user: {userInfo}} = this.props 
    let isAdmin = userInfo.isAdmin;
    
    return(
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <TaskDoingList user={user} changeNotify={changeNotify} />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          {this.showTaskFinishList(isAdmin)}
        </div>
      </div>
    );
  }

  showTaskFinishList = (isAdmin) => {
    return (isAdmin) ? <TaskFinishListAdmin changeNotify={this.props.changeNotify}/> : <TaskFinishList />
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispathToProps = (dispath) => {
  return {
    changeNotify: (style,title,content) => {
      dispath(actChangeNotify(style,title,content));
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(TaskPage);
