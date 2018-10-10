import React, { Component } from 'react';
import { AlertContainer,Alert } from "react-bs-notifier";
import { connect } from 'react-redux';
import { actHideNotify } from './../actions/index';

class Notify extends Component {
  handleDismiss = () => {
    this.props.hideNotify();
  }
  
  render() {
    let { style, title, content, isShow } = this.props.item;
    if(!isShow) return null;
    return (
      <AlertContainer position="top-right">
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

const mapDispathToProps = (dispath) => {
  return {
    hideNotify: () => {
      dispath(actHideNotify());
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Notify);