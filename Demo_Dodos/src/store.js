import { createStore } from 'redux'
import appReducers  from './reducers/index'
//import { actCloseForm,actToggleForm,actOpenForm,actSort } from './actions/index'
const store = createStore(
   appReducers, /* preloadedState, */
  		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

/*store.dispatch({type: "TOGGLE_FORM"});
console.log("TOGGLE_FORM", store.getState());*/

// subcribe(): Khi store thay đổi thì sẽ thực hiện hành động.
store.subscribe(() => {
	//console.log(store.getState())
});

// CLOSE FORM
/*store.dispatch(actCloseForm());
console.log('CLOSE_FORM: ', store.getState());*/

// // TOGGLE_FORM
// store.dispatch(actToggleForm());
// console.log('TOGGLE_FORM: ', store.getState());

// // OPEN_FORM
// store.dispatch(actOpenForm());
// console.log('OPEN_FORM: ', store.getState());

// // CHANGE_SORT
// store.dispatch(actSort("level","desc"));
// console.log('SORT_ITEM: ', store.getState());



export default store;
// store chứa state. Lấy state => getState
// action -> store - > appReducers.