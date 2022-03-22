import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/material-icons/iconfont/material-icons.css';
import Navbar from './Components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <  Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


