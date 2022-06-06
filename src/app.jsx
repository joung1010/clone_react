import './app.css';
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
    <>
      <Login onHandleLogin={login}/>
    </>
  );
}

export default App;
  