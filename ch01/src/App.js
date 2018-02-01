import React, { Component } from 'react';
import './App.css';
import Course from './components/Course';

class App extends Component {
  render() {
    return (
      	<div className="row">
      		<Course name="ReactJS" time="30h" free={true}>ReactJS is very simple</Course>
      		<Course name="Angular 4x" time="55h" free={false}></Course>
      		<Course name="NodeJS" time="35h" free={true}></Course>
		</div>
    );
  }
}

export default App;