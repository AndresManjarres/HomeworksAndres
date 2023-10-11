import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import FirstApp from './components/FirstApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstApp value ={0}/>
  </React.StrictMode>
);

