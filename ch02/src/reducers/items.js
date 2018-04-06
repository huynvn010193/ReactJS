import * as types from './../constants/ActionType'
let defaultState = [
	{id:"A1", name:"Coding",level:1},
	{id:"A2", name:"FootBall",level:0},
	{id:"A3", name:"ABC",level:2},
	{id:"A4", name:"Coding 123",level:2}

];
let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks !== null && tasks.length > 0 ) ? tasks : defaultState;

const items = (state = defaultState,action) => {
	switch(action.type)
	{
		case types.DELETE_ITEM:
			console.log(action);
			return state;
		default:
			return state;
	}
}

export default items;