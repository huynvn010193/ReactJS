import React, { Component } from 'react';

class FormSeach extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input name="username" type="text" className="form-control" placeholder="Enter artist name ..." />
                    <button type="button" className="btn btn-danger">Search</button>
                    <button type="button" className="btn btn-warning">Clear</button>
                </div>
            </form>
        );
    }
}

export default FormSeach;