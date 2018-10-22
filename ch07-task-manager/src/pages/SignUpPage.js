import React, { Component } from 'react';
import FormSignUp from './../components/FormSignUp';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUpPage extends Component {
  render() {
    let {user} = this.props;
    if(user.isLogin === true) {
      return <Redirect to="/user"/>;
    }
    return (
      <div>
        <FormSignUp />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,null)(SignUpPage);
