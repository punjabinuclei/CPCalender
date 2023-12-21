

import axios from 'axios';


const BASE_URL="http://192.168.1.40:3000";

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