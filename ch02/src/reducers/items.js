import * as types from './../constants/ActionType'
import * as config from './../constants/Config'
import {remove } from 'lodash';
const uuidv4 = require('uuid/v4');
let defaultState = [
	{id:"A1", name:"Coding",level:1},
	{id:"A2", name:"FootBall",level:0},
	{id:"A3", name:"ABC",level:2},
	{id:"A4", name:"Coding 123",level:2}

];
let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks !== null && tasks.length > 0 ) ? tasks : defaultState;

const items = (state = defaultState,action) => {
	let id = null;
	switch(action.type)
	{
		case types.DELETE_ITEM:
			id = action.id;
			remove(state,(item)=>{
				return item.id === id;
			});
			localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE,JSON.stringify(state));
			return [...state]; // tạo ra 1 đối tượng tham chiếu từ state ban đầu

		case types.SUBMIT_FORM:
			id = uuidv4();
			let { item } = action;

			state.push({
				id: id,
				name : item.name,
				level: +item.level
			});
			localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE,JSON.stringify(state));
			return [...state];
		default:
			return state;
	}
}

export default items;