import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actOpenForm,actDeleteItem  } from './../actions/index'

class Item extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			
		}
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleDelete(id)
	{
		this.props.deleteItem(id); 
	}
	handleEdit(item)
	{
		//this.props.onClickEdit(item);
		
		this.props.editItem();
	}
	render() {
		const {item} = this.props;
		const {index} = this.props;
	    return (
	        <tr>
	            <td className="text-center">{index + 1}</td>
	            <td>{item.name}</td>
	            <td className="text-center">{this.showElementLevel(item.level)}</td>
	            <td>
	              	<button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
	              	<button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
	            </td>
	      	</tr>
	    );
	}

	showElementLevel(level)
	{
		let elmLevel = <span className="label label-danger">Small</span>;
		if(level === 1)
		{
			elmLevel = <span className="label label-info">Medium</span>;
		}
		else if(level === 2)
		{
			elmLevel = <span className="label label-default">Hight</span>;
		}
		return elmLevel;
	}
}

const mapStateToProps = state => {
	return {
		//isShowForm : state.isShowForm
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		editItem : () => {
			dispatch(actOpenForm());
		},
		deleteItem : (id) => {
			dispatch(actDeleteItem(id));
		}
	}
}

export default connect(null,mapDispatchToProps) (Item);