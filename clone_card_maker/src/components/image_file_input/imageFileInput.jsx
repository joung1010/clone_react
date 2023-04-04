import React, {memo, useRef, useState} from 'react';
import styles from './imageFileInput.module.css';

const ImageFileInput = memo(({uploadService, name, onHandleFileUpload}) => {
    const [loading, setLoading] = useState(false);
    const fileName = name || 'Upload';
    const inputRef = useRef();
    const handleOnChange = async (event) => {
        setLoading(true);
        const result = await uploadService.upload(event.target.files[0]);
        setLoading(false);
        onHandleFileUpload({
            name: result.original_filename,
            url: result.url,
        });

    };
    const onClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    return (
        <div className={styles.container}>
            {
                !loading && <button className={styles.button} onClick={onClick}>{fileName}</button>
            }
            {
                loading && <div className={styles.loading}/>
            }

            <input type="file" ref={inputRef} className={styles.input} onChange={handleOnChange}/>
        </div>
    );
});

export default ImageFileInput;