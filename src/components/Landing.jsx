import React, {useContext, useState, useEffect, createContext} from 'react';


// Context
import { ShowContext } from '../context/ShowsContextProvider';

// Components
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';

//Functions
import { handleScroll } from './functions';

//styles
import styles from './Landing.module.css';


// context for filtere and search bar
export const navbarContext = createContext();

const Landing = () => {
    //context
    const shows = useContext(ShowContext); 
    //search bar
    const [search , setSearch] = useState("");
    //Filter
    const [filterer , setFilterer] = useState("");

    //infinite scroll stuff:
    const [visibleItems , setVisibleItems] = useState([]);
    const [loading , setLoading] = useState(false);


    useEffect(() => {
        setVisibleItems(shows.slice(0 , 10));
        setFilterer("Filter");
    }, [shows, search])

    
    //to handle infinite scroll
    useEffect(() => {
        const props = [shows , setVisibleItems , loading , setLoading , visibleItems];

        //  handleScroll is in functions.js
        window.addEventListener('scroll' , () => handleScroll(...props));
        return () => {
            window.removeEventListener('scroll' , () => handleScroll(...props));
        }
    } , [loading, visibleItems]);




    return (
        <div>
            {/* {NAVBAR} */}
            <navbarContext.Provider value={{setSearch, search,  setFilterer, filterer}}>
                <Navbar />
            </navbarContext.Provider>

            {/* {CARDS} */}
            <div className={styles.cardContainer}>
                {
                    (!search.length && (filterer === "All" || filterer === "Filter"))
                        &&
                        <>
                            {visibleItems.map(show => <Card key={show.id} show={show} />)}
                            <h1 className={styles.loading}>Loading...</h1>
                        </>
                }
                {
                    (search.length)
                        ? 
                        shows.filter(show => show.name.toLowerCase().includes(search.toLowerCase()))
                            .map((show) => <Card key={show.id} show={show} />)
                        : null
                    
                }
                
                {
                    (filterer !== "All" || filterer !== "Filter")
                        && shows.filter(show => show.genres.includes(filterer))
                                .map(show => <Card key={show.id} show={show} />)
                        
                }
            </div>

            {/* {FOOTER} */}
            <Footer search={search}/>
        </div>
    );
};

export default Landing;