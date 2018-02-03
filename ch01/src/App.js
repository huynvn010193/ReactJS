import React, { Component } from 'react';
import './App.css';
import Course from './components/Course';
import Lifecycle from './components/Lifecycle';

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
		let elemCourse = items.map((item,index) =>
			<Course key={index} name={item.name} time={item.time} free = {item.free} >{item.desc}</Course>
		);
		elemCourse = null;
	    return (
	      	<div className="row">
	      		{elemCourse}
	      		<Lifecycle/>
			</div>
	    );
	}
}

export default App;