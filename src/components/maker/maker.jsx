import React from 'react';
import styles from './maker.module.css';
import CardForm from "../cardForm/cardForm";

const Maker = ({cards}) => (
   <section className={styles.maker}>
       <h1 className={styles.title}>maker</h1>
        <ul className={styles.cards}>
            {
                cards.map(card=>(
                    <CardForm card={card}/>
                ))
            }
        </ul>
   </section>
);

export default Maker;