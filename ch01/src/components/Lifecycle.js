import React, { Component } from 'react';
import $ from 'jquery';

class Lifecycle extends Component {

    //======== Mounting ============
    constructor(props)
    {
        super(props);
        this.state = {
            title: "Lifecycle"
        };
        this.handleChangetitle = this.handleChangetitle.bind(this);
        console.log("constructor");
    }

    componentWillMount()
    {
        console.log("componentWillMount");
        this.setState({
            title : "LifecycleCompnent - componentWillMount"
        })
    }

    componentDidMount()
    {
        console.log("componentDidMount");
        $("h3.panel-title").css("color","white");
    }

    // ========================
    
    // ====== Updating ========
    componentWillReceiveProps()
    {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log(nextState);
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate()
    {
        console.log("componentWillUpdate");
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }
    // ======================== //
    handleChangetitle()
    {
        this.setState({
            title : "LifecycleCompnent - handleChangetitle"
        })
    }
    render(){
        console.log("render");
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.title}</h3>
                </div>
                <div className="panel-body">
                    <button onClick={this.handleChangetitle} type="button" className="btn btn-success">Change Title</button>
                </div>
            </div>
        );
    }
}
export default Lifecycle;

