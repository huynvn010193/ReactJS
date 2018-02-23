import React, { Component } from 'react';

class StudyForm extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			fullname:'',
			course: 'php'
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
    	this.setState({fullname: event.target.value});
    	const target = event.target; // Có thể là input hoặc có thể là select box
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
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
						<form onSubmit={this.handleSubmit}>
							<legend>Form Register</legend>
							<div className="form-group">
								<label htmlFor="true">Họ tên</label>
								<input value={this.state.fullname} onChange={this.handleChange} type="text" className="form-control" placeholder="Fullname"/>
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