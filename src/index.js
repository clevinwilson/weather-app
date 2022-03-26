import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/material-icons/iconfont/material-icons.css';
import firebase from './firebase/config';
import {FirebaseContext} from './store/Context'
ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);


