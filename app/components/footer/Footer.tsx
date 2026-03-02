import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Bradley Hill &mdash; Forum Project</p>
        </footer>
    );
};

export default Footer;