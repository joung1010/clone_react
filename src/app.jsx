import styles from './app.module.css'
import Login from "./components/login/login";
import {useState} from "react";

function App({authService}) {
  const [user,setUser] = useState(null);


  const login = (type) => {
      authService.login(type)
          .then(result => setUser(result.user));
  }

    return (
    <div className={styles.app}>
      <Login onHandleLogin={login}/>
    </div>
  );
}

export default App;
  