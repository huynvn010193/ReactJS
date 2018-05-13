import React, { Component } from 'react';

class Breadcrumb extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <ol class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/artist/4mzMFxVZNS2uCVNdsVFoj5">Thu Minh</a></li>
                <li class="active">Giác Quan Thứ, Vol. 6</li>
            </ol>
        );
    }
}

export default Breadcrumb;