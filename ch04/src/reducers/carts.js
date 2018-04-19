import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';

// danh sách sản phẩm nằm trong giỏ hàng => phải là 1 array
let defaultState = [];
let cardItems = JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
//defaultState = (cardItems !== null && cardItems.length > 0);

const carts = (state = defaultState, action) => {
	switch(action.type)
	{
		case types.BUY_PRODUCT:
			return state;
		case types.UPDATE_PRODUCT:
			return state;
		case types.REMOVE_PRODUCT:
			return state;	
		default:
			return state;
	}
}

export default carts;

