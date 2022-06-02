import { initializeApp } from "firebase/app";

const firebaseConfig ={
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId:process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig);
export default app;