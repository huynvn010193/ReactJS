import React, { Component } from 'react';

class Menu extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="list-group">
          <a className="list-group-item " aria-current="false" href="/task">Task</a>
          <a className="list-group-item " aria-current="false" href="/signin">Signin</a>
          <a className="list-group-item " aria-current="false" href="/signup">Signup</a>
      </div>
    );
  }
}   

export default Menu;