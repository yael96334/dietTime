import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
// import BooksStatus from './BooksStatus';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();