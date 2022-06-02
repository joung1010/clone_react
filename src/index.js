import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/authService";
import app from './service/initializeApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService(app);
root.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>
);
