import * as types from './../constants/ActionType';

let defaultState = {
  isLogin: false,
  userInfo: {
    email:'',
    uid:'',
    website:'',
  }
};

const user = (state = defaultState, action) => {
  switch(action.type) {
    case types.USER_LOGIN:
      state.isLogin = true;
      state.userInfo = action.userInfo;
      return {...state};
    case types.USER_LOGOUT:
      state.isLogin = false;
      state.userInfo = {email:'', uid:'',website:'',};
      return {...state};
    default:
      return state;
  }
}

export default user;