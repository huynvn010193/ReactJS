import React, { Component } from 'react';
import AboutItem from "./../components/AboutItem";
import NewsItem from "./../components/NewsItem";

class AboutPage extends Component {
  render() {
    return (
    	<div>
    		<NewsItem />
    		<AboutItem />
		</div>
	);
  	}
}

export default AboutPage;