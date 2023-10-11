import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import FirstApp from './components/Category';
import { Category } from './components/Category';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Category/>
  </React.StrictMode>
);

