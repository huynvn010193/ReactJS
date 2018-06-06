import React, { Component } from 'react';
import Album from '../components/Album';
import SpotifyAxios from './../services/SpotifyAxios';

class ArtistPage extends Component
{
    constructor(props){
        super(props);
        this.state = {
            artist: null,
            albums: []
        }
    }

    componentWillMount()
    {
        let {match} = this.props;
        let id = match.params.id;
        this.loadArtist(id);
        this.loadAlbums(id);
    }

    loadArtist(id)
    {
        SpotifyAxios.getArtists(id).then((reponse) =>
        {
            if(reponse !== undefined && reponse.data !== null)
            {
                this.setState({
                    artist:reponse.data,
                })
            }
        })
    }

    loadAlbums(id)
    {
        SpotifyAxios.getAlbums(id).then((reponse) =>
        {
            if(reponse !== undefined && reponse.data !== null)
            {
                this.setState({
                    albums:reponse.data.items,
                })
            }
        })
    }

    render(){
        let artist = {
            name : '',
            external_urls : '',
            genres: [],
            images: [{url:''}]
        }
        let albums = [{
                name:'',
                id: '',
                images: [{url: ''}]
            }]
        artist = this.state.artist !== null ? this.state.artist : artist;
        albums = this.state.albums !== null ? this.state.albums : albums;
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">{artist.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">
                        <div className="col-sm-4 col-md-4">
                            {this.showImage(artist)}
                            <blockquote style={{marginTop: 20}}>
                            <p>{artist.name}</p>
                            </blockquote>
                            <p><i className="glyphicon glyphicon-play-circle" /><a rel="noopener noreferrer" target="_blank" href={artist.external_urls.spotify}> View Spotify</a><br /><br />
                                <i className="glyphicon glyphicon-play-circle" /> 
                                Genres: {this.showGenres(artist.genres)}
                            </p>
                        </div>
                        <div className="col-sm-8 col-md-8">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Albums</h3>
                                </div>
                                {this.showAlbums(albums)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showGenres(genres)
    {
        let xhtml = null;
        if(genres !== null && genres.length > 0)
        {
            xhtml = genres.map((genre,index) => {
                return (
                    <span key={index} className="label label-warning" style={{marginRight: 5}}>
                        {genre}
                    </span>
                );
            });
        }
        return xhtml;
    }

    showImage(item)
    {
        let xhtml = null;
        if(item.images !== null && item.images.length > 1)
        {
            xhtml = <img src={item.images[0].url} alt={item.name} className="img-rounded img-responsive"/>
        }
        return xhtml;
    }

    showAlbums(albums)
    {
        let xhtml = null;
        if(albums !== null && albums.length > 0)
        {
            xhtml = albums.map((album,index)=>{
                return (
                    <Album key={index} item={album} index={index}/>
                );
            });
        }
        return(
            <div className="panel-body list-albums">
                {xhtml}
            </div>
        )
    }
}

export default ArtistPage;