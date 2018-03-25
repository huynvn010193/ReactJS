let defaultState = [];
let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks !== null && tasks.length > 0 ) ? tasks : defaultState;
const items = (state = defaultState,action) => {
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

export default items;