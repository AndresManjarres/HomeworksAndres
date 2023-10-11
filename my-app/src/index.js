import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import FirstApp from './components/Category';
//import { Category } from './components/Category';
//import { GiftGridExpertApp } from './components/gifExpertApp/GifExpertApp';
import { Father } from './components/Render';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Father/>
  </React.StrictMode>
);

