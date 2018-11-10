import React, { Component } from 'react';
import TaskDoingList from './../components/TaskDoingList';
import TaskFinishList from './../components/TaskFinishList';
import { connect } from 'react-redux';


class TaskPage extends Component {
  render () {
    let { user } = this.props;
    return(
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <TaskDoingList user={user} />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <TaskFinishList user={user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,null)(TaskPage);