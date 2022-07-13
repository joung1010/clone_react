import React, {useRef, useState} from 'react';
import styles from './cardAddForm.module.css';
import ImageFileInput from "../image_file_input/imageFileInput";
import Button from "../button/button";

const CardAddForm = ({addCard,FileInput}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const colorRef = useRef();
    const roleRef = useRef();
    const emailRef = useRef();
    const descriptionRef = useRef();

    const [file,setFile] = useState({
        name: null,
        url : null,
    });

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
            fileName : file.name,
            fileURL: file.url,
        };
        addCard(card);
        formRef.current.reset();
        setFile({
            name: null,
            url : null,
        });
    }
    const onHandleFileUpload = (file) => {
        setFile({
            name : file.name,
            url : file.url,
        });
    };

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
                <FileInput onHandleFileUpload={onHandleFileUpload}/>
            </div>
            <Button name="Add" onClick={onsubmit}/>
        </form>
    );
}

export default CardAddForm;