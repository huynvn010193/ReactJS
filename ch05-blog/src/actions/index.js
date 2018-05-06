import * as types from './../constants/ActionTypes';

export const actLogin = (username,password) =>
{
	return {
		type: types.USER_LOGIN,
		username,
		password
	}
}

export const actLogout = () =>
{
	return {
		type: types.USER_LOGOUT
	}
}