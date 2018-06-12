import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actToggleForm,actUnSelectedItem } from './../actions/index'

class ToggleForm extends Component {
	
	// isShowForm = false => Button Open
	// isShowForm = true => Button Close Form
	// bỏ constructor ghi lại theo arrow function

	toggleForm = () => {
		this.props.handleToggle(); // => Gọi dispatch với giá trị này
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
            	<button onClick = {this.toggleForm} type="button" className={`btn ${btnClass} btn-block`}>{btnName}</button>;
          	</div>
        );
	}
}

const mapStateToProps = state => {
	return {
		isShowForm : state.isShowForm
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleToggle : () => {
			dispatch(actToggleForm());
			dispatch(actUnSelectedItem());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (ToggleForm);