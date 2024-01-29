import axios from "axios";

const BASE_URL = 'https://api.tvmaze.com';


const getShows = async() => {
    const response = await axios.get(`${BASE_URL}/shows`)
    return response.data
}

export {getShows}