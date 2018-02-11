import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from './mocks/tasks'

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			items : tasks,
			iShowForm : false,
			strSearch:'',
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
		console.log(value);
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
		//console.log(this.state.strSearch);
		let items = this.state.items;
		let iShowForm = this.state.iShowForm;
		let elmForm = null;
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