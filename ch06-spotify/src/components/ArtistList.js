import React, { Component } from 'react';

import {connect} from 'react-redux';
import Artist from './Artist';
import * as config from './../constants/Config';

class ArtistList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            artist: [],
            isExist: false
        }
    }

    searchArtist(query)
    {
        if(query !== "" && query !== null)
        {
            let url = config.BASE_URL + '/search?q='+query+'&type=artist&limit=4&offset=0';
            console.log(url);
        }
        // fetch('http://example.com/movies.json')
        // .then(function(response) {
        //     return response.json();
        // })
        // .then(function(myJson) {
        //     console.log(myJson);
        // });
    }

    render() {
        let query = this.props.query;
        this.searchArtist(query);
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