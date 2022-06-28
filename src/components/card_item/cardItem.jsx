import React from 'react';
import styles from './cardItem.module.css';

const CardItem = ({card}) => {
    const getColor = ({color})=>{
        switch (color) {
            case 'Dark':
                return styles.dark;
            case 'Light':
                return styles.light;
            case 'Colorful':
                return styles.colorful;
        }
    }
const color = getColor(card);
    return(
        <div className={`${styles.card} ${color}`}>
            <div className={styles.avatar}>
                <img className={styles.img} src="images/avator.jpg" alt={card.name}/>
            </div>
            <div className={styles.userInfo}>
                <h1 className={styles.name}>{card.name}</h1>
                <p className={styles.company}>{card.company}</p>
                <div className={styles.line}/>
                <p className={styles.role}>{card.role}</p>
                <p className={styles.email}>{card.email}</p>
                <p className={styles.description}>{`"${card.description}"`}</p>
            </div>
        </div>
    );
}

export default CardItem;