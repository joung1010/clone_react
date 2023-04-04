import React,{memo} from 'react';
import styles from './cardItem.module.css';

const DEFAULT_IMG = 'images/default_logo.png'
const CardItem = memo(({card}) => {
    const {name, company, role, email, description, color, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMG;
    return (
        <li className={`${styles.card} ${getColor(color)}`}>
            <img className={styles.avatar} src={url} alt={fileName}/>
            <div className={styles.userInfo}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.role}>{role}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.description}>{`"${description}"`}</p>
            </div>
        </li>
    );
});

function getColor(color){
    switch (color) {
        case 'Dark':
            return styles.dark;
        case 'Light':
            return styles.light;
        case 'Colorful':
            return styles.colorful;
        default:
            throw new Error(`${color} is not define`);
    }
}

export default CardItem;