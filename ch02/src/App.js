import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from './mocks/tasks'
import {filter,includes} from 'lodash';

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			items : tasks,
			iShowForm : false,
			strSearch:'',
			orderBy: 'NAME',
			orderDir: 'ASC'
		};
		this.handleToogleForm = this.handleToogleForm.bind(this);
		this.closeFrom = this.closeFrom.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleToogleForm()
	{
		this.setState({
			iShowForm : !this.state.iShowForm
		});
	}
	handleSearch(value)
	{
		this.setState({
			strSearch: value
		});
	}
	closeFrom()
	{
		this.setState({
			iShowForm : false
		});
	}

	render() {
		// Vừa vào thì items ban đầu bằng giá trị này
		//let itemsOrigin = this.state.items; : Vì 2 tk cùng trỏ vào 1 vùng nhớ 
		// Viết theo kiểu ES6
		let itemsOrigin = [...this.state.items];
		let items = [];
		let elmForm = null;
		let { orderBy, orderDir,iShowForm } = this.state;
		const search = this.state.strSearch;
		// Kiểm tra người dùng đã nhập thì mới thực hiện việc tìm kiếm
		/*if(search.length > 0)
		{
			console.log(search);
			itemsOrigin.forEach((item) =>{
				if(item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
				{
					items.push(item);
				}
				else
				{
					console.log(item);
				}
			});
		}
		else
		{
			items = itemsOrigin;
		}*/
		items = filter(itemsOrigin, (item) => {
			return includes(item.name.toLowerCase(),search.toLowerCase());
		});

		itemsOrigin.push("123");
		if(iShowForm)
		{
			elmForm = <Form onClickCancel={this.closeFrom}/>;
		}
	    return (
	    <div>
	    	{ /*TITLE : START*/ }
	    	<Title />
	    	{ /*TITLE : END */ }

        	{/* CONTROL (SEARCH + SORT + ADD) : START */}
        	<Control
        		orderBy = {orderBy}
        		orderDir = {orderDir}
        		onClickSearchGo = {this.handleSearch}
        		strSearch = {this.state.strSearch}
        		onClickAdd = { this.handleToogleForm } 
        		iShowForm={iShowForm}/>
			{/* CONTROL (SEARCH + SORT + ADD) : END */}

        	{/* FORM : START */}
	        { elmForm }
	        {/* FORM : END */}

	        {/* LIST : START */}
	        <List items={items}/>
	    	{/* LIST : END */}
    	</div>
	    );
	}
}

export default App;