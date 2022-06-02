import React from 'react';
import styles from './header.module.css';

const LoginHeader = (props) => (
    <header className={styles.header}>
       <div className={styles.logo}>
           <img src="images/logo.png" alt=""/>
           <h1 className={styles.title}>Business CardMaker</h1>
       </div>
        <div className={`${styles.logout}`}>
            <button className={styles.button}>Log out</button>
        </div>
    </header>
);

export default LoginHeader;