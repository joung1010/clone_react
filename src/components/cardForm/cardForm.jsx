import React from 'react';
import styles from './cardForm.module.css';
import Button from "../button/button";
import ImageFileInput from "../image_file_input/imageFileInput";

const CardForm = ({card}) => {
    const {name, company, role, email, description, color, fileName, fileURL} = card;
    const onsubmit = ()=>{}
    return(
        <form className={styles.cardForm}>
            <input className={styles.input} type="text" value={name} placeholder="Name"/>
            <input className={styles.input} type="text" value={company} placeholder="Company"/>
            <select className={styles.select} value={color}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input type="text" className={styles.input} value={role} placeholder="Title"/>
            <input type="text" className={styles.input} value={email} placeholder="Email"/>
            <textarea value={description} className={styles.textarea} placeholder="Message"/>
           {/* <label for="fileUplod" className={styles.inputFile}>{card.name}</label>
            <input type="file" id="fileUplod" style={{display:"none"}} />*/}
            <div className={styles.inputFile}>
                <ImageFileInput/>
            </div>
            <Button name="Delete" onClick={onsubmit}/>
        </form>

    );
}

export default CardForm;