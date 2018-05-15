import React, { Component } from 'react';
import Artist from './Artist';

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
        let xhtml = <h3>Enter artist's name to start</h3>
        if(1 > 0)
        {
            xhtml = <Artist/>;
        }
        return (
            <div className="row">
               {xhtml}
            </div>
        );
    }
}

export default ArtistList;