import React from 'react';
import styles from './header.module.css';

const Header = ({logOut}) => (
    <header className={styles.header}>
        {logOut && (<button className={styles.logout}>Logout</button>)}
        <img className={styles.logo} src="images/logo.png" alt=""/>
           <h1 className={styles.title}>Business CardMaker</h1>
    </header>
);

export default Header;