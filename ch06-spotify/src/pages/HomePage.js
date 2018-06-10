import React, { Component } from 'react';

import FormSearch from './../components/FormSearch';
import ArtistList from '../components/ArtistList';
import { connect } from 'react-redux';
import { actGoHome } from './../actions/index';
class HomePage extends Component
{
    // Sau khi trang được tải xong: thì thực hiện hành động changeBreadcrumb về : Home
    componentDidMount()
    {
        this.props.changeBreadcrumb();
    }
    render(){
        return (
            <div className="panel panel-info">
				<div className="panel-heading">
					<FormSearch />
				</div>
				<div className="panel-body">
                    <ArtistList/>
                </div>
			</div>
        )
    }
}

const mapDispatchToProps = (dispath,ownProps) => {
    return {
        changeBreadcrumb: () =>{
            dispath(actGoHome());
        }
    }
}

export default connect(null,mapDispatchToProps) (HomePage);