import React, {useState, useContext, useEffect} from 'react';

// Components
import SearchInput from './SearchInput';
import Filter from './Filter';

// Styles
import styles from './Navbar.module.css';
import styled from 'styled-components';

// Keyframes
import { rotateDown ,rotateDownReverse, rotateUp, rotateUpReverse, slideIn, slideOut } from './keyframes';


// context
import { navbarContext } from './Landing';

// Logo
import logo from '../assets/logo.png';

const Navbar = () => {
    
    const [burgerClicked , setBurgerClicked] = useState(false);
    
    const Burger = styled.div`
        width: 60px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        overflow-x: hidden;
        z-index: 2;
    
        div {
            height: 6px;
            width: 50px;
            margin: 5px;
            background-color: gray;
            border: 1px solid black;
            border-radius: 5px;
        }

        div:nth-child(1) {
            animation: ${burgerClicked ? rotateDown : rotateDownReverse} .5s ease-in-out forwards;
            background-color: ${burgerClicked && "white"};
            transform-origin: 11px;
        }
    
        div:nth-child(2) {
            animation: ${burgerClicked ? slideOut : slideIn} .5s ease-in-out forwards;

        }

        div:nth-child(3) {
            animation: ${burgerClicked ? rotateUp : rotateUpReverse} .5s ease-in-out forwards;
            background-color: ${burgerClicked && "white"};
            transform-origin: 11px;
        }
    `
    const burgerHandler = () => {
        setBurgerClicked(prev => !prev);
    }

    //to close burger when user chooses a filter
    const {filterer} = useContext(navbarContext);

    useEffect(() => {
        setBurgerClicked(false);
    } , [filterer])

    return (
        <div className={styles.container}>
            <div className={styles.componentsContainer}>
                <div className={styles.searchLogo}>
                    {/* <img src={logo} alt='logoImG' className={styles.logo}/> */}

                    <SearchInput />
                    <h1 className={styles.title}>Show Hub</h1>
                </div>
                <Filter />
            </div>

            <div className={styles.burgerContainer}>
                {/* <img src={logo} alt='logoImG' className={styles.logo}/> */}
                <h1 className={styles.title}>Show Hub</h1>
                <Burger onClick={burgerHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Burger>
            </div>

            <div className={burgerClicked ? styles.burgerMenu : styles.burgerMenuHidden}>
                <SearchInput />
                <Filter />
            </div>
        </div>
    );
};

export default Navbar;