import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import {useNavigate} from "react-router-dom";

const Login = ({onHandleLogin,logout}) => {
 const navigate = useNavigate();

    const login = (event) => {
        onHandleLogin(event.target.textContent)
            .then(()=>navigate('/card'));
    }

    return (
        <section className={styles.login}>
            <Header logOut={logout}/>
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