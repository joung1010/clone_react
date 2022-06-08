import React, {useEffect} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './card.module.css';
import {useNavigate} from "react-router-dom";
import Maker from "../maker/maker";
import Preview from "../preview/preview";

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
                <div className={styles.maker}>
                    <Maker/>
                </div>
               <div className={styles.preview}>
                   <Preview/>
               </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Card;