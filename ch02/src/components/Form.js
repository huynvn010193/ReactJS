import React, { Component } from 'react';

class Form extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			taskname : '',
			tasklevel: 0
		}
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleCancel()
	{
		this.props.onClickCancel();
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
    	console.log(this.state);
    	let item = {
    		name: this.state.taskname,
    		level: this.state.tasklevel
    	}
    	this.props.onClickSubmit(item);
    	event.preventDefault();
  	}

	render() {
	    return (
	    	<div className="row">
	          	<div className="col-md-offset-7 col-md-5">
		            <form onSubmit={this.handleSubmit} className="form-inline">

		              	<div className="form-group">
			                <label className="sr-only" htmlFor="true">label</label>
			                <input value={this.state.taskname} onChange={this.handleChange} name="taskname" type="text" className="form-control" placeholder="Task Name"/>
		              	</div>

		              	<div className="form-group">
			                <label className="sr-only" htmlFor="true">label</label>
			                <select value={this.state.tasklevel} onChange={this.handleChange} name="tasklevel" className="form-control" required="required" ref="task_level">Small
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

export default Form;