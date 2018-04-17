import React, { Component } from 'react';
import Helpers from './../libs/Helpers'

class ProductItem extends Component {
	/*constructor(props)
	{
		super(props);
	}*/

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
			xhtml = <p><input name="quantity-product-1" type="number" defaultValue={1} min={1} />
	    	<a data-product={1} type="button" className="price"> {price}</a></p>
		}
		else
		{
			xhtml = <span className="price"> {price} </span>
		}
		return xhtml;
	}

}

export default ProductItem