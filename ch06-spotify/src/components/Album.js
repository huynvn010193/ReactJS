import React, { Component } from 'react';

class Album extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                <img src="https://i.scdn.co/image/23b3caeb7f6d181787bd5bd04f5c0ddbc332dcab" alt="Ước Mơ" className="img-responsive" />
                <div className="caption">
                    <h5><a href="/album/1HpUqkEe7blePla2Gso1lf">Ước Mơ</a></h5>
                </div>
                </div>
            </div>
        );
    }
}

export default Album;