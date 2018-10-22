import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

const menus = [
  {to:'/', exact:true, name:'Signin'},
  {to:'/singin', exact:true, name:'Signin'},
  {to:'/task', exact:true, name:'Task'},
  {to:'/user', exact:true, name:'User'},
  {to:'/singup', exact:true, name:'Signup'},
]

class Menu extends Component {
  render() {
    return (
      <div className="list-group">
        <Link to="/task" className="list-group-item " aria-current="false" href="/task">Task</Link>
        <Link className="list-group-item " aria-current="false" to="/signin">Signin</Link>
        <Link className="list-group-item " aria-current="false" to="/user">User</Link>
        <Link className="list-group-item " aria-current="false" to="/signup">Signup</Link>
      </div>
    );
  }
}   

export default Menu;