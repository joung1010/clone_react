import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/authService";
import app from './service/initializeApp'
import UploadService from './service/uploadService'
import axios from "axios";
import ImageFileInput from "./components/image_file_input/imageFileInput";

const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService(app);
const api = axios.create({
    baseURL:'https://api.cloudinary.com/v1_1'
});
const uploadService = new UploadService(api);
const FileInput = props => (
    <ImageFileInput {...props} uploadService={uploadService}/>
);

root.render(
  <React.StrictMode>
    <App FileInput={FileInput}
        authService={authService}
    />
  </React.StrictMode>  
);
