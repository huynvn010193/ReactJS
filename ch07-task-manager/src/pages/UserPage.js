import React, { Component } from 'react';
import FormUser from "./../components/FormUser";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class UserPage extends Component {
  render() {
    let {user} = this.props;
    if(user.isLogin === false) {
      return <Redirect to="/"/>;
    }
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">User</h3>
        </div>
        <div className="panel-body">
          <FormUser user={user.userInfo}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,null)(UserPage);