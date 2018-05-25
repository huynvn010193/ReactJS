import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  actChangeQuery } from '../actions';

class FormSeach extends Component {
    constructor(props) {
        super(props);

        this.state = {
           query: '',
        };
    }

    handleSearch = (event) => {
        let {query} = this.state;
        this.props.changeQuery(query);
        event.preventDefault();
    }
    
    handleClear = (event) => {
        this.props.changeQuery("");
        this.setState({query:''});
        event.preventDefault();
    }

    handleChange = (event) => 
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        let query = (this.state.query !== '') ? this.state.query : this.props.query;
        
        return (
            <form onSubmit={this.handleSearch} className="form-inline">
                <div className="form-group">
                    <input name="query" onChange={this.handleChange} value={query} type="text" className="form-control" placeholder="Enter artist name ..." />
                    <button onClick={this.handleSearch} type="button" className="btn btn-danger">Search</button>
                    <button onClick={this.handleClear} type="button" className="btn btn-warning">Clear</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
	return{
		query : state.query
	}
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        changeQuery: (query) => {
            dispatch(actChangeQuery(query))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (FormSeach);