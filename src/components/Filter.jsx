import React, {useState, useContext} from 'react';

//styles
import styles from './Filter.module.css';

//styled-components
import styled, {keyframes} from 'styled-components';


const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
        visibility: hidden;
    }
    to {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }
`;


//context
import { navbarContext } from './Landing';

const Filter = () => {

    const [displayDivText , setDisplayDivText] = useState('Filter')
    const [isVisible , setIsVisible] = useState(false)

    const Div = styled.div`
    display: ${isVisible ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    /* background-color: rgba(212, 212, 212, 0.6); */
    background-color: gray;
    border: .5px solid black;
    height: 50%;
    animation: ${isVisible && slideIn} 1s ease-in-out;
    position: absolute;
    right: 100%;
    width: fit-content;
    z-index: 1;
    color: black;

        div {
            margin: 0px 10px 0px 10px;
            color: black;
            cursor: pointer;
            transition: .5s all ease-in-out;
        }
        div:hover {
            color: white;
        }
    
    @media only screen and (max-width : 790px) {
        display: flex;
        top: 100%;
        right: 0px;
        animation: none;
        flex-direction: column;
        height: fit-content;
        border-radius: 5px;
        border: none;
        width: 100%;

        div{
            margin: 10px;
        }
    }

    @media only screen and (max-width : 1200px){
        animation: none;
        display: flex;
        background-color: gray;
    }
`
    
    //context
    const {setFilterer} = useContext(navbarContext);

    const displayDivHandler = () => {
        setIsVisible((prev) => !prev);
    }

    const filterHandler = (event) => {
        const text = event.target.innerText;
        setFilterer(text);
        setDisplayDivText(text);
        setIsVisible(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.displayDiv} onClick={displayDivHandler}>{displayDivText}</div>
            <Div>
                <div onClick={filterHandler}>All</div>
                <div onClick={filterHandler}>Drama</div>
                <div onClick={filterHandler}>Horror</div>
                <div onClick={filterHandler}>Thriller</div>
                <div onClick={filterHandler}>Crime</div>
                <div onClick={filterHandler}>Romance</div>
                <div onClick={filterHandler}>Action</div>
                <div onClick={filterHandler}>Science-Fiction</div>
            </Div>
        </div>
    );
};

export default Filter;