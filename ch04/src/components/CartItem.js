import React, { Component } from 'react';
import Helpers from './../libs/Helpers'
import { connect } from 'react-redux';
import * as Config from './../constants/Config'
import { actUpdateProduct,actRemoveProduct,actChangeNotify } from './../actions/index';


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

	handleDelete = (product) =>
	{
		this.props.removeProduct(product);
		this.props.changeNotify(Config.NOTI_ACT_DELETE);
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
	                <a onClick={() => this.handleDelete(product)} className="label label-danger delete-cart-item"type="button" data-product>Delete</a>
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

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		updateProduct: (product,quantity) =>
		{
			dispatch(actUpdateProduct(product,quantity));
		},
		removeProduct: (product) =>
		{
			dispatch(actRemoveProduct(product));
		},
		changeNotify: (value) =>
		{
			dispatch(actChangeNotify(value));
		}
	}
}



export default connect(null,mapDispatchToProps)(CartItem);