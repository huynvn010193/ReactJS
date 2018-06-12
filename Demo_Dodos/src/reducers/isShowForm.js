import * as types from './../constants/ActionType'
const defaultState = false;

const isShowForm = (state = defaultState,action) => {
	switch(action.type)
	{
		case types.CLOSE_FORM:
			//console.log("CLOSE_FORM",state);
			return false;
		case types.OPEN_FORM:
			//console.log("CLOSE_FORM",state);
			return true;
		case types.TOGGLE_FORM:
			//console.log("CLOSE_FORM",state);
			return !state;
		default:
			return state;
	}
}

export default isShowForm;