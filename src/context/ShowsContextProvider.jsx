import React, {createContext, useState, useEffect} from 'react';


// API
import { getShows } from '../services/api';

export const ShowContext = createContext();

const ShowsContextProvider = ({children}) => {
    const [shows , setShows] = useState([]);

    useEffect(() => {
      const getAPI = async () => {
        setShows(await getShows());
      }
      getAPI();
    }, [])

    return (
        <ShowContext.Provider value={shows}>
            {children}
        </ShowContext.Provider>
    );
};

export default ShowsContextProvider;