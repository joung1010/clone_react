import styles from './app.module.css'
import Login from "./components/login/login";
import {useState} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Card from "./components/card/card";

function App({authService}) {
  const [user,setUser] = useState(null);

  const login = (type) => {
      return  authService.login(type)
          .then(result => setUser(result.user));
  }
  const logout = ()=>{
    authService.logout()
        .then(()=>setUser(null));
  };

    return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login onHandleLogin={login}
            logout={user && logout}
          />}/>
          <Route path="/card"  element={<Card logout={user && logout}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  