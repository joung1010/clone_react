import React, {useRef} from 'react';
import styles from './cardForm.module.css';
import Button from "../button/button";
import ImageFileInput from "../image_file_input/imageFileInput";

const CardForm = ({card,deleteCard,changeCard,FileInput}) => {


    const {name, company, role, email, description, color, fileName} = card;
    const onsubmit = ()=>{
        deleteCard(card);
    }
    const onChange = (event) => {
        event.preventDefault();
        if (event.currentTarget == null) {
            return;
        }
        changeCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }

    const onHandleFileUpload = (file)=>{
            changeCard({
                ...card,
                fileName : file.name,
                fileURL : file.url,
            });
    };

    return(
        <form className={styles.cardForm}>
            <input  className={styles.input} type="text" name="name" value={name} placeholder="Name" onChange={onChange}/>
            <input  className={styles.input} type="text" name="company" value={company} placeholder="Company" onChange={onChange}/>
            <select  className={styles.select} value={color} name="color" onChange={onChange}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input  type="text" className={styles.input} value={role} name="role" placeholder="Title" onChange={onChange}/>
            <input  type="text" className={styles.input} value={email} name="email" placeholder="Email" onChange={onChange}/>
            <textarea  value={description} className={styles.textarea} name="description" placeholder="Message" onChange={onChange}/>
            <div className={styles.inputFile}>
                <FileInput name={fileName} onHandleFileUpload={onHandleFileUpload}/>
            </div>
            <Button name="Delete" onClick={onsubmit}/>
        </form>

    );
}

export default CardForm;