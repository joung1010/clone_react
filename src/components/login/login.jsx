import React from 'react';
import LoginHeader from "../header/header";
import LoginFooter from "../footer/footer";
import styles from './login.module.css';

const Login = (props) => (
    <div className={styles.container}>
         <div className={styles.login}>
             <LoginHeader/>
             <section className={styles.body}>
                 <h1 className={styles.title}>Login</h1>
                 <button className={styles.button}>Google</button>
                 <button className={styles.button}>Github</button>
             </section>
             <LoginFooter/>
         </div>
    </div>
);

export default Login;