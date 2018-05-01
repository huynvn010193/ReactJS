import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
class LeaveMe extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			isConfirm: false,
		}
		this.handleChange = this.handleChange.bind(this);
		//this.handleSumit = this.handleSumit.bind(this);
	}

	handleChange = (event) =>
	{
		const target = event.target;
		const value = target.type === "checbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}



	render(){
		return(
			<div>
				<Prompt
		          	when={Boolean(this.state.isConfirm)}
		          	message={location =>(
		            	`Are you sure you want to go to ${location.pathname}`
	          		)}
          		/>
				<form onSubmit={this.handleSubmit}>
					<legend>Form Register</legend>
					<div className="checkbox">
					<label>
						<input onChange={this.handleChange} checked={this.state.isConfirm} name="isConfirm" type="checkbox" />
						Confirm !?
					</label>
					</div>
				</form>
			</div>
		);
	}
}

export default LeaveMe;