import React from 'react';
import styles from './header.module.css';
import {useNavigate} from "react-router-dom";

const Header = ({logout}) => {

    return(
        <header className={styles.header}>
            {logout && (<button onClick={logout}
                                className={styles.logout}>
                Logout
            </button>)}
            <img className={styles.logo} src="images/logo.png" alt=""/>
            <h1 className={styles.title}>Business CardMaker</h1>
        </header>
    );
}

export default Header;