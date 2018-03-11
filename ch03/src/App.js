import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			input : 
			`<div class="foo bar" style="width:400px; padding: 20px 5px; background:white;">
				<h2 data-value="foo">Support SVG attributes</h2>
			</div>`
		}
	}
    render() {
    	return (
    		<div className="row">Hello 2</div>
    	)
    }
}
export default App;
