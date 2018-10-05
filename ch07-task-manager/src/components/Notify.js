import React, { Component } from 'react';
import { AlertContainer,Alert } from "react-bs-notifier";

class Notify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,

    }
  }
  handleDismiss = () => {
    this.setState({ isShow:false })
  }
  
  render() {
    let { isShow } = this.state;
    if(!isShow) return null;

    return (
      <AlertContainer position="top-left">
        <Alert headline="headline" type="danger" onDismiss={this.handleDismiss} timeout={2000}>
          This is a test of the Emergency Broadcast System. This is only a test.
        </Alert>
      </AlertContainer>
    );
  }
}

export default Notify;