import React, {useRef} from 'react';
import LoginHeader from "../header/header";
import LoginFooter from "../footer/footer";
import styles from './login.module.css';

const Login = ({onHandleLogin}) => {
    const login = (event) => {
        onHandleLogin(event.target.textContent);
    }

    return (
        <section className={styles.login}>
            <LoginHeader/>
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
            <LoginFooter/>
        </section>
    );
}

export default Login;