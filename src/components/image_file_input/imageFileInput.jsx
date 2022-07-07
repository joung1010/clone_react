import React from 'react';
import styles from './imageFileInput.module.css';

const ImageFileInput = ({fileName,uploadService}) => {
    const name = fileName || 'Upload';
    const handleOnChange = (event) => {
        uploadService.processFile(event);
    };
    return(
        <>
            <label htmlFor="fileUplod" className={styles.inputFile}>{name}</label>
            <input type="file" id="fileUplod" style={{display: "none"}} onChange={handleOnChange}/>
        </>
    );
}

export default ImageFileInput;