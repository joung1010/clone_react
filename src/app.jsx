import styles from './app.module.css'
import Login from "./components/login/login";
import {useState} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Card from "./components/card/card";

function App({authService ,FileInput}) {
  
    return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService}/>}/>
          <Route path="/card"  element={<Card authService={authService} FileInput={FileInput} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;   
  