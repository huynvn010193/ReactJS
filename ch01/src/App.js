import React, { Component } from 'react';
import './App.css';
import Course from './components/Course';

class App extends Component {
	render() {
		const items = [
			{
				name : "ReactJS",
				time : "32h",
				free : true,
				desc : "ReactJS is very simple"
			},
			{
				name : "Angular 5x",
				time : "55h",
				free : false,
				desc : ""
			},
			{
				name : "NodeJS",
				time : "35h",
				free : true,
				desc : ""
			}
		];
		const elemCourse = items.map((item,index) =>
			<Course key={index} name={item.name} time={item.time} free = {item.free} >{item.desc}</Course>
		);
	    return (
	      	<div className="row">
	      		{elemCourse}
			</div>
	    );
	}
}

export default App;