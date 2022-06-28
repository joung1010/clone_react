import styles from './app.module.css'
import Login from "./components/login/login";
import {useState} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Card from "./components/card/card";

function App({authService}) {
    const [cards,setCards] = useState([
        {
            name:'Mason',
            company:'Quintet Systems',
            role:'Software Engineer',
            email : 'joung4342@gmail.com',
            description:'I am studying Front-end',
            color:'Dark',
        },
        {
            name:'Bob',
            company:'User',
            role:'Software Engineer',
            email : 'bob@user.com',
            description:'I love it',
            color:'Dark',
        },
        {
            name:'Chris',
            company:'User',
            role:'Software Engineer',
            email : 'Chris@user.com',
            description:'',
            color:'Light',
        },
    ]);
    return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService}/>}/>
          <Route path="/card"  element={<Card authService={authService} cards={cards} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  