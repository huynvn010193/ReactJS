import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToggleForm extends Component {
	constructor(props)
	{
		super(props);
		this.state = {

		}
		//props.onClickSearchGo
		this.handleAdd = this.handleAdd.bind(this);
	}
	// isShowForm = false => Button Open
	// isShowForm = true => Button Close Form

	handleAdd()
	{
		this.props.onClickAdd();
	}
	render() {
		const { isShowForm } = this.props;
		let btnName = "Open Form";
		let btnClass = "btn-success";
		if(isShowForm === true)
		{
			btnName = "Close Form";
			btnClass = "btn-info";
		}
	    return (
          	<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            	<button onClick = {this.handleAdd} type="button" className={`btn ${btnClass} btn-block`}>{btnName}</button>;
          	</div>
        );
	}
}

const mapStateToProps = state => {
	return {
		isShowForm : state.isShowForm
	}
}	
export default connect(mapStateToProps,null) (ToggleForm);