import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggleForm from './ToggleForm';

class Control extends Component {
	constructor(props)
	{
		super(props);
		this.state = {

		}
		this.handleAdd = this.handleAdd.bind(this);
		//props.onClickSearchGo

	}
	handleAdd()
	{
		this.props.onClickAdd();
	}

	render() {
		let {orderBy, orderDir} = this.props;
	    return (
	        <div className="row">
	          	{/* SEARCH : START */}
	          	<Search onClickGo = {this.props.onClickSearchGo}/>
	          	{/* SEARCH : END */}

	          	{/* SORT : START */}
	          	<Sort
	          		onClickSort = {this.props.onClickSort}
					orderBy = {orderBy}
					orderDir = {orderDir}
	          	/>
	          	{/* SORT : END */}

	          	{/* ADD : START */}
	          	<ToggleForm />
	          	{/* ADD : END */}
        	</div>
        );
	}
}

export default Control;