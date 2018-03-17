import { createStore } from 'redux'

let defaultState = {
	items : [],
	iShowForm : false,
	strSearch:'',
	orderBy: 'name',
	orderDir: 'asc',
	itemSelected: null
}

let appReducers = (state = defaultState,action) => {
	switch(action.type)
	{
		case 'CLOSE_FORM':
			console.log("CLOSE_FORM",state);
			break;
		default:
			return state;
	}
	return state;
}


const  store = createStore(appReducers);

console.log(store.getState());

let action = {type: "CLOSE_FORM"};
store.dispatch(action);

export default store;

// store chứa state. Lấy state => getState
// action -> store - > appReducers.