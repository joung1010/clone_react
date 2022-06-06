import styles from './app.module.css'
import Login from "./components/login/login";
import {useState} from "react";

function App({authService}) {
  const [user,setUser] = useState(null);

  const login = (type) => {
    const provider = authService.getProvier(type);
    console.log(provider);
    let userCredentialPromise = authService.login(provider);
    console.log(userCredentialPromise);

  }

    return (
    <div className={styles.app}>
      <Login onHandleLogin={login}/>
    </div>
  );
}

export default App;
  