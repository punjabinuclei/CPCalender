

import axios from 'axios';


// const BASE_URL = "https://clist.by:443/api/v4/contest/?username=punjabinuclei&api_key=be65f278452f80cd9b221cdbb27831f66abad7b6&limit=10&total_count=true&with_problems=false&upcoming=true&format_time=true&start_time__during=2%20days&filtered=true&order_by=start";
const BASE_URL = "http://192.168.1.40:3000";


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