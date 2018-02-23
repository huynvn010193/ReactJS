import React, { Component } from 'react';

class StudyForm extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			fullname:'',
			course: 'php',
			object: 'nkt',
			sendMail: false
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
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
						<form onSubmit={this.handleSubmit}>
							<legend>Form Register</legend>
							<div className="form-group">
								<label htmlFor="true">Họ tên</label>
								<input value={this.state.fullname} onChange={this.handleChange} name="fullname" type="text" className="form-control" placeholder="Fullname"/>
							</div>

							<div className="form-group">
								<label htmlFor="true">Khóa học</label>
								<select value={this.state.course} onChange={this.handleChange} name="course" id="input" className="form-control" required="required">
									<option value="angular">Angular</option>
									<option value="react">ReactJS</option>
									<option value="nodeJS">NodeJS</option>
									<option value="php">PHP</option>
								</select>
							</div>

							<div className="form-group">
								<label htmlFor="true">Đối tượng</label>
								<div className="radio">
									<label>
										<input onChange={this.handleChange} checked={this.state.object === 'old_student'} value="old_student" type="radio" name="object"  />
										Học viên cũ
									</label>
								</div>
								<div className="radio">
									<label>
										<input onChange={this.handleChange} checked={this.state.object === 'student'} value="student" type="radio"  name="object"   />
										Học sinh sinh viên
									</label>
								</div>
								<div className="radio">
									<label>
										<input onChange={this.handleChange} checked={this.state.object === 'nkt'} value="nkt" type="radio" name="object" />
										Người khuyết tật
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input onChange={this.handleChange} checked={this.state.sendMail} name="sendMail" type="checkbox" />SendMail
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