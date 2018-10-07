import * as types from './../constants/ActionType';

export const actChangeNotify = (style,title,content) => ({
  type: types.CHANGE_NOTIFY,
  style, title, content
})

