import { userMainData, userActivityData, userSessionData, userPerformanceData } from "./fetchers" // call retrieving functions from fetchers files

// formating data

// user data for piechart and cards
export const formatMainData = async (id) => {
  const mainInfos = await userMainData(id)
  const score = mainInfos.score || mainInfos.todayScore
  const firstName = mainInfos.userInfos.firstName
  const calories = mainInfos.keyData.calorieCount
  const proteines = mainInfos.keyData.proteinCount
  const lipides = mainInfos.keyData.lipidCount
  const glucides = mainInfos.keyData.carbohydrateCount
  return { firstName, score, calories, proteines, lipides, glucides }
}

// barchart
export const formatActivityData = async (id) => {
  const data = await userActivityData(id)
  const activity = data.sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
  return activity
}

// linechart
export const formatSessionData = async (id) => {
  const data = await userSessionData(id)
  const week = ["L", "M", "M", "J", "V", "S", "D"];
  const sessions = data.sessions.map(({ day, sessionLength }) => ({
    day: week[day - 1],
    value: sessionLength,
  }));
  return sessions
}

// radarchart
export const formatPerformanceData = async (id) => {
  const data = await userPerformanceData(id)
  const translateKind = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  }
  const performances = data.data.map((performance) => ({
    kind: translateKind[performance.kind],
    value: performance.value
  }));
  return performances
}
