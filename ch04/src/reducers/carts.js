import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';
import { remove } from 'lodash'

// danh sách sản phẩm nằm trong giỏ hàng => phải là 1 array
let defaultState = [];
let cardItems = JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
defaultState = (cardItems !== null && cardItems.length > 0) ? cardItems : defaultState;

// Phương thức xử lý sản phẩm trùng => 
// truyền vào cariItems: là toàn bộ giỏ hàng - product: sản phẩm muốn kiểm tra.

let getProductPosition = (cartItems,product) =>{
	let total = cartItems.length;
	for(let i = 0; i < total; i++)
	{
		// Nếu đã tồn tại => trả về vị trí
		if(cartItems[i].product.id === product.id)
		{
			return i;
		}
	}
	return -1;
}

const carts = (state = defaultState, action) => {
	let { product, quantity } = action;
	switch(action.type)
	{
		case types.BUY_PRODUCT:
			// Lấy ra sản phẩm và số lượng mới thêm vào mảng defaultState
			// Xử lý sản phẩm trùng.

			
			let position = getProductPosition(state,product);
			if(position > -1) // edit
			{
				state[position].quantity += quantity;
			}
			else
			{
				state.push({product,quantity});
			}
			localStorage.setItem(configs.CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
			return [...state];
		case types.UPDATE_PRODUCT:
			return state;
		case types.REMOVE_PRODUCT:
			// => Xóa action product ra khỏi state. => sử dụng thư viện lodash
			remove(state,(cartItem)=>{
				return cartItem.product.id === product.id;
			});
			localStorage.setItem(configs.CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
			return [...state];
		default:
			return state;
	}
}

export default carts;

