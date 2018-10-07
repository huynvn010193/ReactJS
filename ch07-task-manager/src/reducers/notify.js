import * as types from './../constants/ActionType';


let defaultState = {
  // isShow: false,
  style: 'info',
  title: '',
  content: '123',
}

const notify = (state = defaultState, action) => {
  let {style='info',title,content} = action;
  switch(action.type){ 
    case types.CHANGE_NOTIFY:
      state.style = style;
      state.title = title;
      state.content = content;
      return {...state}

    case types.HIDE_NOTIFY:
      return {...state}

    default:
      return state;
  }
}

export default notify;
