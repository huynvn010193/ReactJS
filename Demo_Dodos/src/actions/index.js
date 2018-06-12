import * as types from './../constants/ActionType';
import AxiosAPI from './../services/AxiosAPI';

export const actCloseForm = () => 
{
	return {
		type : types.CLOSE_FORM
	}
}

export const actOpenForm = () => 
{
	return {
		type : types.OPEN_FORM
	}
}

export const actToggleForm = () => 
{
	return {
		type : types.TOGGLE_FORM
	}
}

export const actSort = (orderBy,orderDir) => 
{
	return {
		type: types.SORT_ITEM,
		orderBy : orderBy,
		orderDir: orderDir
	}
}

export const actChangeSearch = (search) => 
{
	return {
		type: types.CHANGE_SEARCH,
		search,
	}
}

export const actDeleteItem = (id) =>
{
	return {
		type: types.DELETE_ITEM,
		id
	}
}


export const getAllItems = (item) => {
	return
	{
		type: types.GET_ITEM,
		item
	}
};

export const getTodosFailure = () => ({ type: types.GET_ITEM_FAILS })

export const actGetItems = () =>{
	dispatch => {
		AxiosAPI.getAllItemsapi().then((reponse)=>{
			console.log(reponse.data);
			dispatch(getAllItems(reponse.data))
		}).catch(error => { dispatch(getTodosFailure()) });
	}
}

export const actSubmitForm = (item) =>
{
	return {
		type: types.SUBMIT_FORM,
		item
	}
}

export const actSelectedItem = (item) =>
{
	return {
		type: types.SELECT_ITEM,
		item
	}
}


export const actUnSelectedItem = () =>
{
	return {
		type: types.UNSELECT_ITEM,
	}
}

