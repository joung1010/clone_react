import React, {useRef} from 'react';
import styles from './cardForm.module.css';
import Button from "../button/button";
import ImageFileInput from "../image_file_input/imageFileInput";

const CardForm = ({card,deleteCard,changeCard}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const colorRef = useRef();
    const roleRef = useRef();
    const emailRef = useRef();
    const descriptionRef = useRef();

    const {name, company, role, email, description, color, fileName, fileURL,id} = card;
    const onsubmit = ()=>{
        deleteCard(card);
    }
    const onChange = () => {
        const card = {
            id
            , name : nameRef.current.value || ''
            , company : companyRef.current.value || ''
            , color : colorRef.current.value
            , role : roleRef.current.value || ''
            , email : emailRef.current.value || ''
            , description : descriptionRef.current.value || '',
            fileName : null,
            fileURL:null,
        };
        changeCard(card);
    }
    return(
        <form className={styles.cardForm}>
            <input ref={nameRef} className={styles.input} type="text" value={name} placeholder="Name" onChange={onChange}/>
            <input ref={companyRef} className={styles.input} type="text" value={company} placeholder="Company" onChange={onChange}/>
            <select ref={colorRef} className={styles.select} value={color} onChange={onChange}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input ref={roleRef} type="text" className={styles.input} value={role} placeholder="Title" onChange={onChange}/>
            <input ref={emailRef} type="text" className={styles.input} value={email} placeholder="Email" onChange={onChange}/>
            <textarea ref={descriptionRef} value={description} className={styles.textarea} placeholder="Message" onChange={onChange}/>
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