import React from 'react';
import styles from './preview.module.css';
import CardItem from "../card_item/cardItem";

const Preview = ({cards}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>preview</h1>
        <ul className={styles.cardItems}>
            {
               cards.map(card => (
                   <CardItem card={card} key={card.id}/>
               ))
            }
        </ul>
    </section>
);

export default Preview;