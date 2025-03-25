import axios from 'axios';

const BASE_URL =  'http://localhost:3000/user';

const fetchData = async (endpoint, userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}/${endpoint}`)
    return response.data
  } catch (error) {
    console.error(`Erreur :`, error)
    throw error
  }
}

export default fetchData