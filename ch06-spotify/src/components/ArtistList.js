import React, { Component } from 'react';
import {connect} from 'react-redux';

import Artist from './Artist';
import SpotifyFetch from '../services/SpotifyFetch';

class ArtistList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            artists: [],
            isExist: false
        }
    }

    searchArtist(query)
    {
        if(query !== "" && query !== null)
        {
            SpotifyFetch.getArtists(query).then((data) => {
                if(data !== undefined && data !== null)
                {
                    this.setState({
                        artists: data.artists.items
                    });
                }
            });
        }
        else
        {
            this.setState({
                artists: []
            });
        }
    }
    // Sử dụng cho vấn đề khi back về home thì vẫn giữ nguyên giá trị search trc đó.
    componentWillMount() {
        this.searchArtist(this.props.query);
    }
    
    componentWillReceiveProps(nextProps)
    {
        this.searchArtist(nextProps.query);
    }

    render() {
        let {artists} = this.state;
        let {query} = this.props;
        let xhtml = <h3>Enter artist's name to start</h3>;
        if(artists.length > 0)
        {
            xhtml = artists.map((artist,index) =>{
                return (
                    <Artist key={index} item={artist} index={index}/>
                );
            });
        }
        else if(query !== "")
        {
            xhtml = <h3>Không có dữ liệu cho <strong>{query}</strong></h3>
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