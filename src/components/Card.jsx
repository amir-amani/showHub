import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Styles
import styles from './Card.module.css';

const Card = ({show}) => {

    const navigateTo = useNavigate()
    const navigateToDetails = (name) => {
        navigateTo(`/details/${name}`);
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={show.image.medium} alt="show" />
                <h3>{show.name}</h3>
                <div className={styles.button}>
                    <Link className={styles.link} to={`/details/${show.name}`}>About</Link>
                    {/* <button onClick={() => navigateToDetails(show.name)}>About</button> */}
                </div>
            </div>
        </div>
    );
};

export default Card;