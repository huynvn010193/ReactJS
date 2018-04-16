import * as types from './../constants/ActionType';
//import * as configs from './../constants/Config';

let defaultState = [
	{
		id: 'aplusautomation123',
		name: 'aplus automation',
		image: 'aplusautomation.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 12,
		canBuy: true
	},
	{
		id: 'aplusmedia',
		name: 'aplus media',
		image: 'aplus-media.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 22,
		canBuy: false
	},
	{
		id: 'robofigcombo',
		name: 'robo fig combo',
		image: 'robo_fig_combo.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 5,
		canBuy: true
	},
	{
		id: 'targetleapfrog',
		name: 'target leap frog',
		image: 'target-leap-frog.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 5,
		canBuy: true
	}

];
const products = (state = defaultState, action) => {
	switch(action.type)
	{
		case types.LIST_PRODUCT:
			return state;
		default:
			return state;
	}
}

export default products;

