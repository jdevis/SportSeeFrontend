/* Retrieving Datas **/
import { userMainData, userActivityData, userPerformanceData, userSessionData } from '../../services/models';
import { useEffect, useState } from 'react'
import '../Dashboard/_dashboard.scss'
/* Graphics components **/
import BarCharts from '../../components/BarChart';
import LineCharts from '../../components/LineChart';
import RadarCharts from '../../components/RadarChart';
import PieCharts from '../../components/PieChart';
import Cards from '../../components/Card';
/* Img icon **/
import Calories from '../../assets/img/calories-icon.png';
import Glucides from '../../assets/img/carbs-icon.png';
import Proteines from '../../assets/img/protein-icon.png';
import Lipides from '../../assets/img/fat-icon.png';

import { useParams } from 'react-router-dom'

const Dashboard = () => {

	const { id } = useParams()
	const intID = parseInt(id, 10)

	const [userData, setUserData] = useState({
		main: null,
		activity: null,
		sessions: null,
		performance: null,
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [
					mainDataResponse,
					activityDataResponse,
					averageSessionDataResponse,
					performanceDataResponse,
				] = await Promise.all([
					userMainData(intID),
					userActivityData(intID),
					userSessionData(intID),
					userPerformanceData(intID),
				])

				if (
					!mainDataResponse ||
					!activityDataResponse ||
					!averageSessionDataResponse ||
					!performanceDataResponse
				) {
					throw new Error('Les données reçues sont invalides ou vides.')
				}
				setUserData({
					main: mainDataResponse.userData,
					activity: activityDataResponse,
					sessions: averageSessionDataResponse,
					performance: performanceDataResponse
				})

			} catch (error) {
				console.error('Erreur lors du chargement des données :', error)
				if (error.response) {
					console.error("Détails de l'erreur API :", error.response.data)
				}
			}
		}
		fetchData()
	}, [intID])
	// const firstName = userData.main.userInfos.firstName
	// const averageSessions = userData.sessions.sessions
	// const dailyActivity = userData.activity.sessions
	// const performance = userData.performance.data
	const averageFalse = [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
	const activityFalse = [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
	const performanceFalse= [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
	const score = 0.12
	return (
		<div className='profil'>
			<h1>Bonjour <span>Toto</span></h1>
			<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			<div className='graph'>
				<p>Durée moyenne des sessions (min)</p>
				<LineCharts data={averageFalse} />
				<p>Activité quotidienne</p>
					<BarCharts data={activityFalse} />
				<p>Performance</p>
					<RadarCharts data={performanceFalse} />
					<p>Score</p>
					<PieCharts data={score} />
			</div>
			{/* <div>
				<p>Durée moyenne des sessions (min)</p>
				<LineCharts data={averageSession.sessions} />
				<p>Activité quotidienne</p>
				<BarCharts data={dailyActivity.sessions} />
				<p>Performance</p>
				<RadarCharts data={performance.data} />
				<p>Score</p>
				<PieCharts data={userScore} />
				<p>Récapitulatif</p>
				<section>
					<Cards value={userCount.calorieCount.toLocaleString('fr')} icon={Calories} name="Calories" unit="kCal" />
					<Cards value={userCount.proteinCount} icon={Proteines} name="Proteines" unit="g" />
					<Cards value={userCount.carbohydrateCount} icon={Glucides} name="Glucides" unit="g" />
					<Cards value={userCount.lipidCount} icon={Lipides} name="Lipides" unit="g" />
				</section>
			</div> */}
		</div>
	)
}
export default Dashboard