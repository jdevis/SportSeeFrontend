import axios from 'axios'; // Promise based HTTP client
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockData" // mock data

const BASE_URL = 'http://localhost:3000/user'; // API url
const isMockData = true; // switching mock to API 

// fetching data with axios 
const fetchData = async (uri, userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}/${uri}`)
    return response.data.data
  } catch (error) {
    console.error(`Erreur :`, error)
    throw error
  }
}

// retrieve data via API or mock
export const userMainData = async (id) => {
  if (isMockData) {
    const userData = USER_MAIN_DATA.find((user) => user.id === id);
    return userData
  }
  return await fetchData('', id)
}
export const userSessionData = async (id) => {
  if (isMockData) {
    const averageSession = USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
    return averageSession
  }
  return await fetchData('average-sessions', id)
}
export const userActivityData = async (id) => {
  if (isMockData) {
    const dailyActivity = USER_ACTIVITY.find((user) => user.userId === id);
    return dailyActivity
  }
  return await fetchData('activity', id)
}
export const userPerformanceData = async (id) => {
  if (isMockData) {
    const performance = USER_PERFORMANCE.find((user) => user.userId === id);
    return performance
  }
  return await fetchData('performance', id)
}