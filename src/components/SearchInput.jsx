import React, {useContext, useEffect} from 'react';


// Styles
import styles from './searchInput.module.css';

// Icon
import searchIcon from '../assets/search-svg.svg'

// Context
import { navbarContext } from './Landing';

const SearchInput = () => {

    const {setSearch, search , filterer} = useContext(navbarContext);

    // To reset search input if filter is All.
    useEffect(() => {
        if(filterer === "All"){
            setSearch("");
        }
    }, [filterer])

    const changeHandler = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input placeholder='Search...' type="text" name="search" onChange={changeHandler} value={search}/>
                <div className={styles.icon}>
                    <img src={searchIcon} alt="searchIcon" />
                </div>
            </div>
        </div>
    );
};

export default SearchInput;