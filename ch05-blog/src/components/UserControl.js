import React, { Component } from 'react';

class UserControl extends Component {
  render() {
    return (
    	<div className="bg-faded p-4 my-4">
		    <hr className="divider" />
		    <h2 className="text-center text-lg text-uppercase my-0">
		        <strong>User Control</strong>
		    </h2>
		    <hr className="divider" />
		    <form>
			    <div className="row">
			        <div className="form-group col-lg-6">
			            <label className="text-heading">Hello:<strong>nhat huy</strong></label>
			            <div className="clearfix" />
			            <div className="form-group col-lg-12">
			            	<button type="button" className="btn btn-secondary">Logout</button>
			            </div>
			        </div>
			    </div>
			</form>
		</div>
	);
  	}
}

export default UserControl;
