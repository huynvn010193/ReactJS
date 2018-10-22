import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

const menus = [
  {to:'/', exact:true, name:'Signin'},
  {to:'/task', exact:true, name:'Task'},
  {to:'/user', exact:true, name:'User'},
  {to:'/signup', exact:true, name:'Signup'},
]

const MenuLink = ({ menu }) => {
  return (
    <Route 
      path={menu.to}
      exact={menu.exact}
      children = 
        {
          ({ match }) => {
            let active = (match !== null) ? "active":"";
            return (
              <Link to={menu.to}className={`list-group-item ${active}`}>
                {menu.name}
              </Link>
            )
          }
        }
    />
  );
}

class Menu extends Component {
  render() {
    return (
      <div className="list-group">
        {this.showMenu(menus)}
      </div>
    );
  }

  showMenu(menus) {
    let xhtml = null;
    if(menus.length > 0) {
      xhtml = menus.map((menu,index) => {
        return (
          <MenuLink menu={menu} key={index}/>
        )
      });
    }
    return xhtml;
  }
}

export default Menu;