import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// const dùng định nghĩa những giá trị menu có thể có:
const menus = [
	{to: '/', exact: true, name:'Home'},
	{to: '/about', exact: false, name:'About'},
	{to: '/course', exact: false, name:'Course'},
	{to: '/leave-me', exact: true, name:'Leave Me'}
]

class Menu extends Component{
	render(){
		return(
			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<div className="list-group">
					{this.showMenu(menus)}
				</div>
			</div>
		);
	}

	showMenu(menus)
	{
		let xhtml = null;
		if(menus.length > 0)
		{
			xhtml = menus.map((menu,index)=>{
				return (<NavLink key={index} exact={menu.exact} to={menu.to} activeClassName="active" className="list-group-item">
						{menu.name}
					</NavLink>
				);
			});
		}
		return xhtml;
	}
}

export default Menu;