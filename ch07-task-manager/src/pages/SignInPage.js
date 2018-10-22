import React, { Component } from 'react';
import FormLogin from "./../components/FormLogin";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignInPage extends Component {
  render() {
    let {user} = this.props;
    if(user.isLogin === true) {
      return <Redirect to="/user"/>;
    }
    return (
      <div>
        <FormLogin />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,null)(SignInPage);