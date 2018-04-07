import * as types from './../constants/ActionType';

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