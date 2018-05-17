import React, { Component } from 'react';
import Artist from './Artist';
import {connect} from 'react-redux';

class ArtistList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            artist: [],
            isExist: false
        }
    }

    render() {
        console.log(this.props.query);
        
        let xhtml = <h3>Enter artist's name to start</h3>
        if(1 > 0)
        {
            xhtml = <div><Artist/><Artist/><Artist/></div>;
        }
        return (
            <div className="row">
               {xhtml}
            </div>
        );
    }
}

const mapStateToProps = state => {
	return{
		query : state.query
	}
}

export default connect(mapStateToProps,null) (ArtistList);