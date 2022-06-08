import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Login = ({authService}) => {
 const navigate = useNavigate();

 const gotoCardMaker = (userId)=>{
     navigate("/card",{state:{id:userId}})
 };

    const login = (event) => {
        authService.login(event.target.textContent)
            .then((result)=> navigate("/card",result.user.uid));
    }
    useEffect(()=>{
        authService.onAuthStateChanged(user => {
            user && gotoCardMaker(user.uid);
        });
    });

    return (
        <section className={styles.login}>
            <Header/>
            <section className={styles.body}>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={login}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={login}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
}

export default Login;