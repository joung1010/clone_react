import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/authService";
import app from './service/initializeApp'
import UploadService from './service/uploadService'

const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService(app);
const uploadService = new UploadService();
root.render(
  <React.StrictMode>
    <App authService={authService}
         uploadService={uploadService}
    />
  </React.StrictMode>
);
