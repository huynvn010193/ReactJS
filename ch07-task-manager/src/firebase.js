import * as firebase from 'firebase';

const config = { 
  piKey : "AIzaSyCxtP6yHno4ufN5OuaxaIyqvRHL6PR4FlQ" ,
  authDomain : " task-manager-caa5e.firebaseapp.com " ,
  databaseURL : " https://task-manager-caa5e.firebaseio.com " ,
  projectId : " task-manager-caa5e " ,
  storageBucket : " task-manager-caa5e.appspot. com " , 
  messagingSenderId :"861959724370"
};

export const firebaseApp = firebase.initializeApp(config);