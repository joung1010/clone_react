import React from 'react';
import styles from './maker.module.css';
import CardForm from "../cardForm/cardForm";

const Maker = ({cards}) => (
   <section className={styles.maker}>
       <h1 className={styles.title}>maker</h1>
        <div className={styles.cards}>
            {
                cards.map(card=>(
                    <CardForm card={card}/>
                ))
            }
        </div>
   </section>
);

export default Maker;