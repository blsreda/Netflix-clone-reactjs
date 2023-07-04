import axios from "axios";
import { API_KEY, TMDB_API_LINK } from "../utils/constants";

const options = {
    params: {
        api_key:API_KEY
    }
}
export const fetchFromAPI = async(url) => {
    const {data} =await axios.get(`${TMDB_API_LINK}/${url}`,options);
    return data;
}