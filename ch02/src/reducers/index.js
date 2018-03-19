import { combineReducers } from 'redux'
import isShowFormReducer from './isShowFormReducer'
import sortReducer from './sortReducer'


/*const defaultState = {
	items : [],
	iShowForm : true,
	strSearch:'',
	orderBy: 'name',
	orderDir: 'asc',
	itemSelected: null
}*/

const appReducers = combineReducers({
	iShowForm : isShowFormReducer,
	sort: sortReducer
});

export default appReducers;