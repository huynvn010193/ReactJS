import React, { Component } from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import Slider from "./Slider";
import NewsItem from "./NewsItem";
import Footer from "./Footer";
import AboutItem from "./AboutItem";
import BlogItem from "./BlogItem";
import FormLogin from "./FormLogin";
import UserControl from "./UserControl";

class App extends Component {
  render() {
    return (
        <div className="App">
        	<Header />
        	<Navigation />
        	<div className="container">
        		<Slider />
        		<NewsItem />
        		<NewsItem />
                <NewsItem />
        	</div>
        	<Footer/>
        </div>
    );
  }
}

export default App;
