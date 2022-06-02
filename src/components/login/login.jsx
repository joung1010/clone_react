import React, {useRef} from 'react';
import LoginHeader from "../header/header";
import LoginFooter from "../footer/footer";
import styles from './login.module.css';

const Login = ({onHandleLogin}) => {
    const btnRef = useRef();
    const login = (event)=>{
        onHandleLogin(event.target.textContent);
    }

    return(
        <div className={styles.container}>
            <div className={styles.login}>
                <LoginHeader/>
                <section className={styles.body}>
                    <h1 className={styles.title}>Login</h1>
                    <button ref={btnRef} className={styles.button} onClick={login}>Google</button>
                    <button ref={btnRef} className={styles.button} onClick={login}>Github</button>
                </section>
                <LoginFooter/>
            </div>
        </div>
    );
}

export default Login;