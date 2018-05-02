import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Course from './components/Course';
import LeaveMe from './components/LeaveMe';
import Admin from './components/Admin';
import NotFound from './components/NotFound';

const routes = [
  	{
	    path: "/",
	    exact: true,
	    main: ({location}) => <Home location = {location}/>
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
	    path: "/admin/:id",
	    exact: false,
	    main: ({match,location}) => <Admin match={match} location = {location}/>
  	},
  	{
	    path: "",
	    exact: true,
	    main: () => <NotFound />
  	}
];

export default routes;