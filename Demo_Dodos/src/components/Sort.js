import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSort } from './../actions/index'

class Sort extends Component {
	/*constructor(props)
	{
		super(props);
		this.state = {

		}
		this.handleSort = this.handleSort.bind(this);
	}*/

	// Viết theo kiểu arrow function không cần contructor

	handleSort = (orderBy,orderDir) =>{
		this.props.sortItem(orderBy,orderDir);
	}
	render() {
		let {orderBy, orderDir} = this.props.sort;
		let strSort = orderBy.toUpperCase() +' - '+orderDir.toUpperCase();
	    return (
	        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
	            <div className="dropdown">
	              	<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
	                	Sort by <span className="caret" />
	              	</button>
	              	<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
		            	<li><a onClick={() => this.handleSort('NAME','ASC')} role="button">NAME ASC</a></li>
		            	<li><a onClick={() => this.handleSort('NAME','DESC')} role="button">NAME DESC</a></li>
		                <li role="separator" className="divider" />
		                <li><a onClick={() => this.handleSort('LEVEL','ASC')} role="button">LEVEL ASC</a></li>
		                <li><a onClick={() => this.handleSort('LEVEL','DESC')} role="button">LEVEL DESC</a></li>
	              	</ul>
	              	<span className="label label-success label-medium">{ strSort }</span>
	            </div>
          	</div>
	    );
	}
}

const mapStateToProps = state => {
	return {
		sort: state.sort
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		sortItem : (orderBy,orderDir) => {
			dispatch(actSort(orderBy,orderDir));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (Sort);