import React from 'react';

// Styles
import styles from './Footer.module.css';

const Footer = ({search}) => {

    // imported the search to check if the search bar is empty or not to make sure
    // the puppet doesnt have a height to prevent it from disrupting infinite scrolling
    return (
        <>
        <div className={search && styles.puppet}></div>
        <div className={styles.container}>
            <p>A demo by <a href='https://www.instagram.com/amir.mmd.amani/' target='_blank'>Amir M. Amani</a></p>
        </div>
        </>
    );
};

export default Footer;