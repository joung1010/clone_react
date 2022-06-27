import React from 'react';
import styles from './cardForm.module.css';

const CardForm = ({card}) => (
    <div className={styles.cardForm}>
        <input className={styles.input} type="text" value={card.name} placeholder="Name"/>
        <input className={styles.input} type="text" value={card.company} placeholder="Company"/>
        <select className={styles.select} value={card.color}>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="Colorful">Colorful</option>
        </select>
        <input type="text" className={styles.input} value={card.role} placeholder="Title"/>
        <input type="text" className={styles.input} value={card.email} placeholder="Email"/>
        <textarea value={card.description} className={styles.textarea} placeholder="Message"/>
        <label for="fileUplod" className={styles.inputFile}>{card.name}</label>
        <input type="file" id="fileUplod" style={{display:"none"}} />
        <button className={styles.button}>Delete</button>
    </div>

);

export default CardForm;