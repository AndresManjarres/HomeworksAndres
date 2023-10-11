import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import FirstApp from './components/Category';
//import { Category } from './components/Category';
import { GiftGridExpertApp } from './components/gifExpertApp/GifExpertApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GiftGridExpertApp/>
  </React.StrictMode>
);

