import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Course from './components/Course';
import LeaveMe from './components/LeaveMe';
import NotFound from './components/NotFound';

const routes = [
  	{
	    path: "/",
	    exact: true,
	    main: () => <Home />
  	},
  	{
	    path: "/about",
	    exact: true,
	    main: () => <About />
  	},
  	{
	    path: "/course",
	    exact: false,
	    main: ({match}) => <Course match={match}/>
  	},
  	{
	    path: "/leave-me",
	    exact: false,
	    main: () => <LeaveMe />
  	},
  	{
	    path: "",
	    exact: true,
	    main: () => <NotFound />
  	}
];

export default routes;