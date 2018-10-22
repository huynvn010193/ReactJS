import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { firebaseApp } from './firebase';
import { actLogin, actLogout } from './actions/index';

const store = createStore(
  appReducers,
);

firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    let userInfo = {
      email: user.email,
      uid: user.uid,
    }
    store.dispatch(actLogin(userInfo));
  } else {
    console.log('user logout');
  }
});

console.log(store.getState());

ReactDOM.render(
  <Provider store = {store}>
      <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

