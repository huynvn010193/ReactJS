import React, { Component } from 'react';
import './App.css';
import Course from './components/Course';

class App extends Component {
  render() {
    return (
      	<div className="row">
      		<Course />
      		<Course />
      		<Course />
		</div>
    );
  }
}

export default App;