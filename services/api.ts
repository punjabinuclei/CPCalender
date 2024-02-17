

import axios from 'axios';


// const BASE_URL = "https://clist.by:443/api/v4/contest/?username=punjabinuclei&api_key=be65f278452f80cd9b221cdbb27831f66abad7b6&?limit=30&total_count=false&with_problems=false&upcoming=true&format_time=true&filtered=true&order_by=-start";
// const BASE_URL = "http://192.168.1.40:3000";
const BASE_URL = "https://upset-ruby-butterfly.cyclic.app/";


const fetchData = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data.objects;  // Make sure to return the data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export { fetchData };