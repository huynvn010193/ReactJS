import React, { Component } from 'react';
import { firebaseApp } from './../firebase';
import { connect } from  'react-redux';
import * as notify from './../constants/Notify';
import { actChangeNotify } from './../actions/index';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    let {email, password} = this.state;
    firebaseApp.auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS,
                                notify.NOTI_LOGIN_SUCCESSFULL_TITLE,
                                notify.NOTI_LOGIN_SUCCESSFULL_MESSAGE);
      })
      .catch((error) => {
        this.props.changeNotify(notify.NOTI_TYPE_DANGER,notify.NOTI_LOGIN_FAIL_TITLE,error.message);
    });
    
    event.preventDefault();
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Sign In</h3></div>
        <div className="panel-body">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-6">
                <input type="text" onChange={this.handleChange} name="email" className="form-control" id="inputEmail3" placeholder="Email" value={this.state.email} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-6">
                <input type="password" onChange={this.handleChange} name="password" className="form-control" id="inputPassword3" placeholder="Password" value={this.state.password} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-6">
                <button type="submit" className="btn btn-success">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const dispathToProps = (dispath) => {
  return {
    changeNotify: (style,title,content) => {
      dispath(actChangeNotify(style,title,content));
    }
  }
}
export default connect(null,dispathToProps)(FormLogin);