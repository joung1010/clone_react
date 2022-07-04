import React, {useRef} from 'react';
import styles from './cardAddForm.module.css';
import ImageFileInput from "../image_file_input/imageFileInput";
import Button from "../button/button";

const CardAddForm = ({addCard}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const colorRef = useRef();
    const roleRef = useRef();
    const emailRef = useRef();
    const descriptionRef = useRef();

    const onsubmit = (event) =>{
        event.preventDefault();
        const card = {
            id : Date.now(),
            form: formRef.current.value || '',
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            color: colorRef.current.value ,
            role: roleRef.current.value || '',
            email: emailRef.current.value || '',
            description: descriptionRef.current.value || '',
        };
        addCard(card);
        formRef.current.reset();
    }
    return(
        <form ref={formRef} className={styles.cardForm}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name"/>
            <input ref={companyRef} className={styles.input} type="text" name="company"  placeholder="Company"/>
            <select ref={colorRef} className={styles.select} name="color">
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input ref={roleRef} type="text" className={styles.input}  name="role" placeholder="Title"/>
            <input ref={emailRef} type="text" className={styles.input} name="email"  placeholder="Email"/>
            <textarea ref={descriptionRef}  className={styles.textarea} name="description" placeholder="Message"/>
            <div className={styles.inputFile}>
                <ImageFileInput/>
            </div>
            <Button name="Add" onClick={onsubmit}/>
        </form>
    );
}

export default CardAddForm;