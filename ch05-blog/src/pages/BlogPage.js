import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogItem from "./../components/BlogItem";
import NewsItem from "./../components/NewsItem";
import { Redirect } from 'react-router-dom'

class BlogPage extends Component {
  	render() {
	  	let {user} = this.props;
	  	if(user.isLogin === false)
	  	{
	  		return <Redirect to="/login" />;
	  	}
	    return (
	    	<div>
	    		<BlogItem />	
	    		<NewsItem />
	    	</div>
		);
  	}
}

const mapStateToProps = state =>
{
	return {
		user: state.user
	}
}
export default connect(mapStateToProps,null)(BlogPage);