import React, { Component } from 'react';
import { AlertContainer,Alert } from "react-bs-notifier";
import { connect } from 'react-redux';

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
    let { style, title, content } = this.props.item;
    if(content === '') return null;
    return (
      <AlertContainer position="top-left">
        <Alert headline={title} onDismiss={this.handleDismiss} timeout={2000} style={style}>
          {content}
        </Alert>
      </AlertContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.notify
  }
}

export default connect(mapStateToProps,null)(Notify);