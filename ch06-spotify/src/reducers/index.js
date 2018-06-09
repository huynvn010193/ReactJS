import { combineReducers } from 'redux';
import query from './query.js';
import breadcrumb from './breadcrumb';

const appReducers = combineReducers({
	query,
	breadcrumb
});

export default appReducers;