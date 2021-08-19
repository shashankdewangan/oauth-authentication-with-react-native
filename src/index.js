import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Login from './login';
//import App from './popup'


ReactDOM.render(
  <React.StrictMode>
   <div className="g-signin">
      <Login />
      
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);



