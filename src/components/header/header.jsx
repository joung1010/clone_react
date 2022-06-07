import React from 'react';
import styles from './header.module.css';
import {useNavigate} from "react-router-dom";

const Header = ({logOut}) => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        logOut();
        navigate("/");
    };

    return(
        <header className={styles.header}>
            {logOut && (<button onClick={handleLogout}
                                className={styles.logout}>
                Logout
            </button>)}
            <img className={styles.logo} src="images/logo.png" alt=""/>
            <h1 className={styles.title}>Business CardMaker</h1>
        </header>
    );
}

export default Header;