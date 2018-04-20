import React, { Component } from 'react';
import Helpers from './../libs/Helpers'
import Validate from './../libs/Validate'

class ProductItem extends Component {
	constructor(props)
	{
		super(props);

		this.state = {
			value : 1,
		}
	}

	// Viết theo kiểu arrow Function => ko cần bind vào constructor

	handleClick = (product) =>
	{
		// Lấy ra số lượng sản phẩm dựa vào input => thêm dấu + để hiểu là kiểu số => cách ép kiểu trong reactJS
		let quantity = +this.state.value;
		if(Validate.checkQuantity(quantity) === false)
		{
			console.log("validate");
		}
		else
		{
			console.log(quantity+"-"+product.id);
		}
	}

	handleChange = (event) =>
	{
		const target = event.target;
		const value = target.type === "checbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	render() {
		let {product} = this.props;
		let name = product.name;
		let image = product.image;
		let summary = product.summary;
	    return (
	    	<div className="media product">
	            <div className="media-left">
	                <a href="http://localhost:3000/">
	                <img className="media-object" src={`images/${image}`} alt="{name}" />
	                </a>
	            </div>
	            <div className="media-body">
	                <h4 className="media-heading">{name}</h4>
	                <p>{summary}</p>
	                {this.showAreaBuy(product)}
	            </div>
	        </div>
	    );
	}

	

	showAreaBuy(product)
	{
		let xhtml = null;
		let price = Helpers.toCurrency(product.price,"USD","right");
		if(product.canBuy === true)
		{
			xhtml = <p><input name="value" type="number" value={this.state.value} onChange={this.handleChange} min={1} />
	    	<a onClick={()=>this.handleClick(product)} type="button" className="price"> {price}</a></p>
		}
		else
		{
			xhtml = <span className="price"> {price} </span>
		}
		return xhtml;
	}

}

export default ProductItem