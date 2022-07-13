import React, {useRef} from 'react';
import styles from './imageFileInput.module.css';

const ImageFileInput = ({uploadService,name, onHandleFileUpload}) => {
    const fileName = name || 'Upload';
    const inputRef= useRef();
    const handleOnChange = async (event) => {
         const result = await uploadService.upload(event.target.files[0]);
        onHandleFileUpload({
            name : result.original_filename,
            url : result.url,
        });

    };
    const onClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    return(
        <div>
            <button className={styles.button} onClick={onClick}>{fileName}</button>
            <input type="file" ref={inputRef} className={styles.input}  onChange={handleOnChange}/>
        </div>
    );
}

export default ImageFileInput;