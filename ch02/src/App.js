import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';


//import tasks from './mocks/tasks'
import {filter,includes, orderBy as funcOrderBy, remove, reject } from 'lodash';
const uuidv4 = require('uuid/v4');

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			items : [],
			iShowForm : false,
			strSearch:'',
			orderBy: 'name',
			orderDir: 'asc',
			itemSelected: null
		};
		//this.handleToogleForm = this.handleToogleForm.bind(this);
		//this.closeForm = this.closeForm.bind(this);
		//this.handleSearch = this.handleSearch.bind(this);
		this.handleSortApp = this.handleSortApp.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleSubmit_App = this.handleSubmit_App.bind(this);
		this.handleEdit_App = this.handleEdit_App.bind(this);
	}
	/*// Lấy từ local store cập nhật lại cho Item
	componentWillMount()
	{
		let items = JSON.parse(localStorage.getItem('task')) || [];
		this.setState({
			items : items,
		});
	}*/

	/*handleToogleForm()
	{
		this.setState({
			iShowForm : !this.state.iShowForm,
			itemSelected: null
		});
	}*/
	/*handleSearch(value)
	{
		this.setState({
			strSearch: value
		});
	}*/
	/*closeForm()
	{
		this.setState({
			iShowForm : false
		});
	}*/
	handleSortApp(orderBy,orderDir)
	{
		this.setState({
			orderBy : orderBy,
			orderDir: orderDir
		});
	}
	handleDelete(id)
	{
		let items = this.state.items
		remove(items,(item)=>{
			return item.id === id;
		});
		this.setState({
			items: items
		});
		localStorage.setItem('task',JSON.stringify(items));
	}
	handleSubmit_App(item)
	{
		// Lấy ra danh sách đã tồn tại
		let {items} = this.state;
		let id = null;
		if(item !== null)
		{
			items = reject(items, {id: item.id});
			id = item.id;
		}
		else
		{
			id = uuidv4();
		}

		items.push({
			id: id,
			name : item.name,
			level: +item.level
		});
		this.setState({
			items: items,
			iShowForm : false
		});
		localStorage.setItem('task',JSON.stringify(items));

	}
	handleEdit_App(item)
	{
		this.setState({
			itemSelected: item,
			iShowForm : true
		});
	}	
	render() {
		// Vừa vào thì items ban đầu bằng giá trị này
		//let itemsOrigin = this.state.items; : Vì 2 tk cùng trỏ vào 1 vùng nhớ 
		// Viết theo kiểu ES6
		let itemsOrigin = (this.state.items !== null) ? [...this.state.items]:[];
		//let items = [];
		
		let { orderBy, orderDir,itemSelected } = this.state;
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
		// Search
		
		/*items = filter(itemsOrigin, (item) => {
			return includes(item.name.toLowerCase(),search.toLowerCase());
		});

		// Sort
		items = funcOrderBy(items,[orderBy.toLowerCase()],[orderDir.toLowerCase()]);*/

	    return (
	    <div>
	    	{ /*TITLE : START*/ }
	    	<Title />
	    	{ /*TITLE : END */ }

        	{/* CONTROL (SEARCH + SORT + ADD) : START */}
        	<Control
        		orderBy = {orderBy}
        		orderDir = {orderDir}
        		onClickSort={this.handleSortApp}
        		//onClickSearchGo = {this.handleSearch}
        		strSearch = {this.state.strSearch}
        		
        	/>
			{/* CONTROL (SEARCH + SORT + ADD) : END */}

        	<Form 
				itemSelected = {itemSelected}
				onClickSubmit={this.handleSubmit_App} 
				
				/>;

	        {/* LIST : START */}
	        <List 
	        	onClickEdit = {this.handleEdit_App}
				onClickDelete = {this.handleDelete}
	        />
	    	{/* LIST : END */}
    	</div>
	    );
	}
}

export default App;