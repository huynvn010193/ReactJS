const defaultState = false;

const isShowForm = (state = defaultState,action) => {
	switch(action.type)
	{
		case 'CLOSE_FORM':
			//console.log("CLOSE_FORM",state);
			state = false;
			return state;
		case 'OPEN_FORM':
			//console.log("CLOSE_FORM",state);
			state = true;
			return state;
		case 'TOGGLE_FORM':
			//console.log("CLOSE_FORM",state);
			state = !state;
			return state;
		default:
			return state;
	}
}

export default isShowForm;