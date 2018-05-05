import React, { Component } from 'react';
import BlogItem from "./../components/BlogItem";
import NewsItem from "./../components/NewsItem";

class BlogPage extends Component {
  render() {
    return (
    	<div>
    		<BlogItem />	
    		<NewsItem />
    	</div>
	);
  	}
}

export default BlogPage;