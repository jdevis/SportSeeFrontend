import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockData"
import fetchData from "./fetchers"

const isMockData = true;

export const userMainData = async (id) => {
    if (isMockData){
        const userData = USER_MAIN_DATA.find((user) => user.id === id);
        return userData
    }
    return await fetchData('', id)
}
export const userSessionData = async (id) => {
    if (isMockData){
	    const averageSession = USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
        return averageSession
    }
    return await fetchData('average-sessions',id)
}
export const userActivityData = async (id) => {
    if (isMockData){
	    const dailyActivity = USER_ACTIVITY.find((user) => user.userId === id);
        return dailyActivity
    }
    return await fetchData('activity',id)
}
export const userPerformanceData = async (id) => {
    if (isMockData){
	    const performance = USER_PERFORMANCE.find((user) => user.userId === id);
        return performance
    }
    return await fetchData('performance',id)
}