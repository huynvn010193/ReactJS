import * as firebase from 'firebase';

// const config = { 
//   piKey : "AIzaSyCxtP6yHno4ufN5OuaxaIyqvRHL6PR4FlQ" ,
//   authDomain : " task-manager-caa5e.firebaseapp.com " ,
//   databaseURL : " https://task-manager-caa5e.firebaseio.com " ,
//   projectId : " task-manager-caa5e " ,
//   storageBucket : " task-manager-caa5e.appspot. com " , 
//   messagingSenderId :"861959724370"
// };

const config = {
  apiKey: "AIzaSyDLvJTDKamA77hyvpqLDGMET_lOCRjA0zo",
  authDomain: "task-manager-reactjs-bc227.firebaseapp.com",
  databaseURL: "https://task-manager-reactjs-bc227.firebaseio.com",
  projectId: "task-manager-reactjs-bc227",
  storageBucket: "task-manager-reactjs-bc227.appspot.com",
  messagingSenderId: "735348947886"
};
export const firebaseApp    = firebase.initializeApp(config);
export const taskRef        = firebase.database().ref("tasks");