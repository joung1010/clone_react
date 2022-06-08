import React, {useEffect} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './card.module.css';
import {useNavigate} from "react-router-dom";

const Card = ({authService}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout()
            .then(()=> navigate("/"));
    };
    useEffect(() => {
        authService.onAuthStateChanged((user)=>{
            user || navigate("/");
        });
    });

    return(
        <div className={styles.card}>
            <Header logout={handleLogout}/>
            <section className={styles.list}>

            </section>
            <Footer/>
        </div>
    );
}

export default Card;