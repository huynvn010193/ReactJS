import * as types from './../constants/ActionType';

export const actChangeNotify = (style,title,content) => ({
  type: types.CHANGE_NOTIFY,
  style, title, content
})

export const actHideNotify = () => ({
  type: types.HIDE_NOTIFY,
});

export const actLogin = (userInfo) => ({
  type: types.USER_LOGIN,
  userInfo
});

export const actLogout = () => ({
  type: types.USER_LOGOUT
});
