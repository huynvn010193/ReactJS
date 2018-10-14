import React, { Component } from 'react';
import { firebaseApp } from './../firebase';
import { connect } from  'react-redux';
import { actChangeNotify } from './../actions/index';
import * as notify from './../constants/Notify';

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      website:'',
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
    let {email,password,website} = this.state;
    firebaseApp.auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email,password)
      .then(data => {
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS,notify.NOTI_SINGUP_SUCCESSFULL_TITLE,notify.NOTI_SINGUP_SUCCESSFULL_MESSAGE);
      })
      .catch((error) => {
        this.props.changeNotify(notify.NOTI_TYPE_DANGER,notify.NOTI_SINGUP_FAIL_TITLE,error.message);       
      })
    event.preventDefault();
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Sign Up</h3></div>
        <div className="panel-body">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-6">
                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-6">
                <input type="password" value={this.state.password} onChange={this.handleChange} name="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Website</label>
              <div className="col-sm-6">
                <input type="text" value={this.state.website} onChange={this.handleChange} name="website" className="form-control" id="inputEmail3" placeholder="Website" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-6">
                <button onClick={this.handleSubmit} type="submit" className="btn btn-success">Sign up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const dispathToProps = (dispath) => {
  return {
    changeNotify: (style,title,content) => {
      dispath(actChangeNotify(style,title,content));
    }
  }
}

export default connect(null,dispathToProps)(FormSignUp);