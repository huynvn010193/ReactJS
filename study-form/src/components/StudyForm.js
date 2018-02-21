import React, { Component } from 'react';

class StudyForm extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			fullname:'',
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
    	this.setState({fullname: event.target.value});
  	}

  	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.fullname);
    	event.preventDefault();
  	}

	render() {
		return (
			<div className="row">
				<div className="panel panel-info">
					<div className="panel-heading">
						<h3 className="panel-title">Study Form</h3>
					</div>
					<div className="panel-body">
						<form onSubmit={this.handleSubmit} role="form">
							<legend>Form Register</legend>
							<div className="form-group">
								<label htmlFor="true">Họ tên</label>
								<input value={this.state.fullname} onChange={this.handleChange} type="text" className="form-control" placeholder="Fullname"/>
							</div>
							<div className="form-group">
								<label htmlFor="true">Khóa học</label>
								<select name="true" id="input" className="form-control" required="required">
									<option value="angular">Angular</option>
									<option value="react">ReactJS</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="true">Đối tượng</label>
								<div className="radio">
									<label>
										<input type="radio" name="dsd" id="input" defaultValue />
										Học viên cũ
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="dsd" id="input" defaultValue />
										Học sinh sinh viên
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="dsd" id="input" defaultValue />
										Người khuyết tật
									</label>
								</div>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
    	);
	}
}
export default StudyForm;