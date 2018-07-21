import React, { Component } from 'react';
import {connect} from 'react-redux'; 

import Track from '../components/Track';
import SpotifyAxios from './../services/SpotifyAxios';
import { actGoAlbum } from './../actions/index';

class AlbumPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            album: null,
            tracks:[]
        }
    }

    componentWillMount()
    {
        let { match } = this.props;
        let id = match.params.id;
        this.loadAlbums(id);
    }

    loadAlbums(id)
    {
        SpotifyAxios.getAlbum(id).then((reponse) =>
        {
            if(reponse.data !== undefined && reponse.data !== null)
            {   
                this.setState({
                    album:reponse.data,
                });
                this.props.changeBreadcrumb(reponse.data.name,`/album/${reponse.data.id}`);
            }
        });
    }

    render(){
        let album = {
            name: '',
            id:'',
            images:[{url:''}],
            tracks:{ items:[] }  
        };

        album = this.state.album !== null ? this.state.album : album;
        
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{album.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            {this.showImages(album)}
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Tracks</h3>
                                </div>
                                <div className="panel-body">
                                    {this.showTracks(album.tracks.items)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    showImages(item)
    {
        let xhtml = null;
        if(item.images !== null && item.images.length > 1)
        {
            xhtml = <img src={item.images[0].url} alt="Thu Minh" className="img-rounded img-responsive" />
        }
        return xhtml;
    }

    showTracks(tracks)
    {
        let xhtml = null;
        console.log(tracks);
        
        if(tracks !== null && tracks.length > 0)
        {
            xhtml = tracks.map((track,index) => {
                return (
                    <Track key={index} item={track} index={index}/>
                )
            });
        }
        return xhtml;
    }
}

const mapDispatchToProps = ( dispatch,ownProps ) => {
    return {
        changeBreadcrumb : (name,to) =>{
            dispatch(actGoAlbum(name, to))
        }
    }
}
export default connect(null,mapDispatchToProps)(AlbumPage);