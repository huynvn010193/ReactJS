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
				iShowForm : false
		};
		this.handleToogleForm = this.handleToogleForm.bind(this);
	}
	handleToogleForm()
	{
		this.setState({
			iShowForm : !this.state.iShowForm
		});
	}
	render() {
		let items = this.state.items;
		let iShowForm = this.state.iShowForm;
		let elmForm = null;
		if(iShowForm)
		{
			elmForm = <Form />;
		}
	    return (
	    <div>
	    	{ /*TITLE : START*/ }
	    	<Title />
	    	{ /*TITLE : END */ }

        	{/* CONTROL (SEARCH + SORT + ADD) : START */}
        	<Control onClickAdd = { this.handleToogleForm } iShowForm={iShowForm}/>
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