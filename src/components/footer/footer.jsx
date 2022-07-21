import React, {memo} from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
    <footer className={styles.footer}>
        <div className={styles.title}>Code your Dream</div>
    </footer>
));

export default Footer;