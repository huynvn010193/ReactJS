import { createStore } from 'redux'
import { actCloseForm,actToggleForm,actOpenForm } from './actions/index'

let defaultState = {
	items : [],
	iShowForm : true,
	strSearch:'',
	orderBy: 'name',
	orderDir: 'asc',
	itemSelected: null
}

let appReducers = (state = defaultState,action) => {
	switch(action.type)
	{
		case 'CLOSE_FORM':
			//console.log("CLOSE_FORM",state);
			state.iShowForm = false;
			return state;
		case 'OPEN_FORM':
			//console.log("CLOSE_FORM",state);
			state.iShowForm = true;
			return state;
		case 'TOGGLE_FORM':
			//console.log("CLOSE_FORM",state);
			state.iShowForm = !state.iShowForm;
			return state;
		default:
			return state;
	}
}
const  store = createStore(appReducers);
console.log('Init: ', store.getState());

// CLOSE FORM
store.dispatch(actCloseForm());
console.log('CLOSE_FORM: ', store.getState());

// OPEN_FORM
store.dispatch(actOpenForm());
console.log('OPEN_FORM: ', store.getState());

// TOGGLE_FORM
store.dispatch(actToggleForm());
console.log('TOGGLE_FORM: ', store.getState());

export default store;

// store chứa state. Lấy state => getState
// action -> store - > appReducers.