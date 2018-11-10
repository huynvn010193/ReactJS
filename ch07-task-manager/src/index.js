import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { firebaseApp, usersRef } from './firebase';
import { actLogin, actLogout } from './actions/index';

const store = createStore(
  appReducers,
);

firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    let userInfo = {
      email: user.email,
      uid: user.uid,
      website: '',
      isAdmin: false,
    }
    // Lấy ra thông tin của User đăng nhập
    usersRef.child(user.uid).once('value').then(data => {
      userInfo.isAdmin = data.val().isAdmin;
      userInfo.website = data.val().website;
      store.dispatch(actLogin(userInfo));
    })
  } else {
    store.dispatch(actLogout());
  }
});

ReactDOM.render(
  <Provider store = {store}>
      <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

