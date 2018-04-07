import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actCloseForm,actSubmitForm  } from './../actions/index'

class Form extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			taskid: '',
			taskname : '',
			tasklevel: 0
		}
		
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillMount()
	{
		/*let item = this.props.itemSelected;
		this.updateItem(item);*/
	}

	componentWillReceiveProps(nextprops)
	{
		/*let item = nextprops.itemSelected;
		this.updateItem(item);*/
	}

	updateItem(item)
	{
		if(item !== null)
		{
			this.setState({
				taskid : item.id,
				taskname : item.name,
				level : item.level
			});
		}
	}

	handleCancel()
	{
		this.props.formCancel();
	}

	handleChange(event) {
    	const target = event.target; // Có thể là input hoặc có thể là selectbox
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;
	    this.setState({
	    	[name]: value
	    });	    
  	}

  	handleSubmit(event) {
    	let item = {
    		id : this.state.taskid,
    		name: this.state.taskname,
    		level: this.state.tasklevel
    	}
    	this.props.formSubmit(item);
    	event.preventDefault();
  	}

	render() {
		let { isShowForm } = this.props;
		if(isShowForm === false) return null;
		
	    return (
	    	<div className="row">
	          	<div className="col-md-offset-7 col-md-5">
		            <form onSubmit={this.handleSubmit} className="form-inline">

		              	<div className="form-group">
			                <label className="sr-only" htmlFor="taskname">label</label>
			                <input value={ this.state.taskname } onChange={this.handleChange} name="taskname" type="text" className="form-control" placeholder="Task Name"/>
		              	</div>

		              	<div className="form-group">
			                <label className="sr-only" htmlFor="tasklevel">label</label>
			                <select value={ this.state.tasklevel } onChange={this.handleChange} name="tasklevel" className="form-control" required="required" ref="task_level">Small
			                  	<option value={0}>Small</option>
			                  	<option value={1}>Medium</option>
			                  	<option value={2}>High</option>
			                </select>
		              	</div>

		              	<button type="submit" className="btn btn-primary">Submit</button>
		              	<button onClick ={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
		            </form>
	          	</div>
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
		formCancel : () => {
			dispatch(actCloseForm());
		},
		formSubmit : (item) =>{
			dispatch(actSubmitForm(item));
			dispatch(actCloseForm());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (Form);