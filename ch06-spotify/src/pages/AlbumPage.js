import React, { Component } from 'react';
import Track from '../components/Track';

class AlbumPage extends Component
{
    render(){
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Album 01</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <img src="https://i.scdn.co/image/757378d73eedc6a53cff69b49eca173fccc9ad02" alt="Thu Minh" className="img-rounded img-responsive" />
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Tracks</h3>
                                </div>
                                <div className="panel-body">
                                    <Track/>
                                    <Track/>
                                    <Track/>
                                    <Track/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumPage;