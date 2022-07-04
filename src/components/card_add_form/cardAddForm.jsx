import React, {useRef} from 'react';
import styles from './cardAddForm.module.css';
import ImageFileInput from "../image_file_input/imageFileInput";
import Button from "../button/button";

const CardAddForm = ({addCard}) => {
    const formRef = React.createRef();


    const onsubmit = (event) =>{
        event.preventDefault();
        console.log([...formRef.current.children]);
        console.log(formRef.current.children[2].value);
        const addItem = {id:Date.now(), };
        [...formRef.current.children].forEach(item => {
           const {value,name} = item;
           addItem[`${name}`] = value;
        });
        addCard(addItem);
        formRef.current.reset();
    }
    return(
        <form ref={formRef} className={styles.cardForm}>
            <input className={styles.input} type="text" name="name" placeholder="Name"/>
            <input className={styles.input} type="text" name="company"  placeholder="Company"/>
            <select className={styles.select} name="color">
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input type="text" className={styles.input}  name="role" placeholder="Title"/>
            <input type="text" className={styles.input} name="email"  placeholder="Email"/>
            <textarea  className={styles.textarea} name="description" placeholder="Message"/>
            <div className={styles.inputFile}>
                <ImageFileInput/>
            </div>
            <Button name="Add" onClick={onsubmit}/>
        </form>
    );
}

export default CardAddForm;