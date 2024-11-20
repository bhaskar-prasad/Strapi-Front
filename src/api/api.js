import axios from 'axios';

const API_URL = 'http://localhost:1337/api/users-data';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}?filters[username][$eq]=${username}`);
        return response.data.data[0]; 
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};
