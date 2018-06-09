import React, { Component } from 'react';
import { connect } from 'react-redux';


class Breadcrumb extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <ol className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/artist/4mzMFxVZNS2uCVNdsVFoj5">Thu Minh</a></li>
                <li className="active">Giác Quan Thứ, Vol. 6</li>
            </ol>
        );
    }
}

export default connect(mapStateToProps,null) (Breadcrumb);