import React, { Component } from 'react';

class FormUser extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">User</h3></div>
        <div className="panel-body">
          <div>
            <h4>Email: lthlan54@gmail.com</h4>
            <h4>UserID: W740UjZcnlSMgiwfBuYV4aMU9i43</h4>
            <h4>Website: hailan.com</h4>
            <button type="submit" className="btn btn-success">Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUser;