import React from 'react';
import styles from './preview.module.css';
import CardItem from "../card_item/cardItem";

const Preview = ({cards}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>preview</h1>
        <ul className={styles.cardItems}>
            {
               Object.keys(cards).map(key => (
                   <CardItem card={cards[key]} key={key}/>
               ))
            }
        </ul>
    </section>
);

export default Preview;