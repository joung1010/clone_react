import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/authService";
import {firebaseAuth,firebaseDatabase} from './service/initializeApp'
import UploadService from './service/uploadService'
import axios from "axios";
import ImageFileInput from "./components/image_file_input/imageFileInput";
import DatabaseService from "./service/databaseService";

const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService(firebaseAuth);
const api = axios.create({
    baseURL:'https://api.cloudinary.com/v1_1'
});
const uploadService = new UploadService(api);
const FileInput = props => (
    <ImageFileInput {...props} uploadService={uploadService}/>
);

const database =new DatabaseService(firebaseDatabase);
 
root.render(
  <React.StrictMode>
    <App FileInput={FileInput}
        authService={authService}
         database={database}
    />
  </React.StrictMode>   
);
