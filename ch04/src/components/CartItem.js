import React, { Component } from 'react';
import Helpers from './../libs/Helpers'

class CartItem extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			value : 0,
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
		// cartItem là 1 đối tương gồm 2 phần tử product và quantity
		let {cartItem,index} = this.props;
		let {product} = cartItem;
		// Khi đã mua hàng muốn thay đổi số lượng ngay tại item đã mua
		let quantity = (this.state.value !== 0) ? this.state.value : cartItem.quantity;
		let price = Helpers.toCurrency(product.price,"USD","right");
	    return (
	    	<tr>
	            <th scope="row">{ index+1 }</th>
	            <td>{product.name}.</td>
	            <td>{ price }</td>
	            <td>
	            	<input name="name" type="number" value = { quantity } min={1} onChange={this.handleChange}/>
	            </td>
	            <td>
	            	<strong>{this.showSubTotal(product,quantity)}</strong>
	            	</td>
	            <td>
	                <a className="label label-info update-cart-item" type="button" data-product>Update</a>
	                <a className="label label-danger delete-cart-item"type="button" data-product>Delete</a>
	            </td>
	        </tr>
	    );
	}
	showSubTotal(product,quantity)
	{
		let result = null;
		result = Helpers.toCurrency(product.price * quantity,"USD","right");
		return result;
	}

}

export default CartItem