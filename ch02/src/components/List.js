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
		const { items, search } = this.props;
		console.log("search",search);
		let eleItem = <tr><th colSpan={4}>Không có công việc</th></tr>;
		if(items.length > 0)
		{
			eleItem = items.map((item,index) =>
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
		}
		
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
		items : state.items,
		search: state.search
	}
}	
export default connect(mapStateToProps,null) (List);