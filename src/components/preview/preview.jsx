import React from 'react';
import styles from './preview.module.css';
import CardItem from "../card_item/cardItem";

const Preview = ({cards}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>preview</h1>
        <div className={styles.cardItems}>
            {
               cards.map(card => (
                   <CardItem card={card}/>
               ))
            }
        </div>
    </section>
);

export default Preview;