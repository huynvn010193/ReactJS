import React, { Component } from 'react';
import { firebaseApp } from './../firebase';

class FormUser extends Component {

  handleClick = () => {
    firebaseApp.auth().signOut();
  }
  render() {
    let {user} = this.props;
    let email = user.email;
    let userID = user.uid;
    let isAdmin = (user.isAdmin) ? "Admin":"User";
    
    return (
      <div>
        <h4>Email: {email}</h4>
        <h4>UserID: {userID}</h4>
        <h4>Website: {user.website}</h4>
        <h4>Admin: {isAdmin}</h4>
        <button type="submit" onClick={this.handleClick} className="btn btn-success">Logout</button>
      </div>
    );
  }
}

export default FormUser;