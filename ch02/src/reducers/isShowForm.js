import * as types from './../constants/ActionType'
const defaultState = false;

const isShowForm = (state = defaultState,action) => {
	switch(action.type)
	{
		case types.CLOSE_FORM:
			//console.log("CLOSE_FORM",state);
			state = false;
			return state;
		case types.OPEN_FORM:
			//console.log("CLOSE_FORM",state);
			state = true;
			return state;
		case types.TOGGLE_FORM:
			//console.log("CLOSE_FORM",state);
			state = !state;
			return state;
		default:
			return state;
	}
}

export default isShowForm;