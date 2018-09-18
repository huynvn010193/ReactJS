import React from 'react';
import ReactDOM from 'react-dom';

// import { firebaseApp } from './firebase';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import appReducers from '../reducers/index';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// const store = createStore(
//   // appReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// ReactDOM.render(
//   <Provider store = {store}>
//       <App/>
//   </Provider>, document.getElementById('root'));
// 
