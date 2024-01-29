import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link, useLocation , useNavigate} from 'react-router-dom';

// Context
import { ShowContext } from '../context/ShowsContextProvider';

// Style
import styles from './Details.module.css';

const Details = () => {
    
    const location = useLocation();
    const navigateTo = useNavigate()
    const shows = useContext(ShowContext);
    const { name } = useParams()
    const [show , setShow] = useState(null);

    
    useEffect(() => {
        const getAPI = async() => {
            setShow(await shows.find((s) => s.name == name));
        }
        getAPI()
    }, [shows, location])

    
    useEffect(() => {
        if(location.state && location.state.scrollY !== undefined){
            window.scrollTo(0, location.state.scrollY);
        }
    } , [location]);

    return (
        <>
        {show
            ? 
            <div className={styles.container} >
                <div className={styles.backgroundImage}>
                    <img src={show.image.medium} alt="backIMG" />
                </div>
                <div className={styles.detailsContainer}>
                        <div className={styles.detailsCard}>
                            <h1>{show.name}</h1>

                            {show.genres.map(genre => <span key={Math.random() * 2} className={styles.genres}>{genre}</span>)}

                            <h4>Rating : {show.rating.average}</h4>

                            <div className={styles.summary} 
                                dangerouslySetInnerHTML={{ __html:show.summary}}>
                            </div>

                            <div className={styles.link}>
                                <Link className={styles.innerLink} to='/'>Go back</Link>
                                {/* <button onClick={() => navigateTo(-1)}>Go back</button> */}
                            </div>
                        </div>
                        
                </div>
                <div className={styles.imgContainer}>
                    <img src={show.image.original} alt="showImg" />
                </div>
            </div>
          : 
            <p>not found</p>
        }
    </>
    );
};

export default Details;