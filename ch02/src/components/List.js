import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class List extends Component {
	constructor(props)
	{
		super(props);
		this.state = {

		}
		// props.onClickEdit = App.handleEdit_App

	}
	render() {
		console.log(this.props.tasks);
		const items = this.props.items;
		const eleItem = items.map((item,index) =>
		{
			return (
				<Item 
					onClickEdit = {this.props.onClickEdit}
					onClickDelete = {this.props.onClickDelete} 
					key = {index} 
					item={item} 
					index = {index}
				/>
			);
		});
	    return (
	        <div className="panel panel-success">
	          	<div className="panel-heading">List Task</div>
	          	<table className="table table-hover ">
		            <thead>
		              	<tr>
			                <th style={{width: '10%'}} className="text-center">#</th>
			                <th>Task</th>
			                <th style={{width: '20%'}} className="text-center">Level</th>
			                <th style={{width: '20%'}}>Action</th>
		              	</tr>
		            </thead>
	            	<tbody>
		             	{ eleItem }
	            	</tbody>
	          	</table>
	        </div>
	    );
	}
}

/*Tách dụng: lấy những cái state của tk Store => trả về những thuộc tính, props của tk List
	state: truyền từ store.js qua.
*/
const mapStateToProps = state => {
	return {
		tasks : state.items
	}
	
}	
export default connect(mapStateToProps,null) (List);