import React, { Component } from 'react';

import FormSearch from './../components/FormSearch';

class HomePage extends Component
{
    render(){
        return (
            <div className="panel panel-info">
				<div className="panel-heading">
					<FormSearch />
				</div>
				
			</div>
        )
    }
}

export default HomePage;