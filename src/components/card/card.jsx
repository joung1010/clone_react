import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './card.module.css';

const Card = ({logout}) => (
    <div className={styles.card}>
        <Header logOut={logout}/>
          <section className={styles.list}>

          </section>
        <Footer/>
    </div>
);

export default Card;