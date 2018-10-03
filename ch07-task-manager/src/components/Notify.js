import React, { Component } from 'react';
import { AlertContainer,Alert } from "react-bs-notifier";

const alerts = [{
	id: 1,
	type: "info",
	message: "Hello, world"
}, {
	id: 2,
	type: "success",
	message: "Oh, hai"
}]

class Notify extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AlertContainer position="top-left">
        <Alert />
      </AlertContainer>
    );
  }
}

export default Notify;