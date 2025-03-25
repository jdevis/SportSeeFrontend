/* Retrieving Datas **/
import { userMainData, userActivityData, userPerformanceData, userSessionData } from '../../services/models';
import { useEffect, useState } from 'react'
import '../Dashboard/_dashboard.scss'
/* Graphics components **/
import BarCharts from '../../components/BarChart';
import LineCharts from '../../components/LineChart';
import RadarCharts from '../../components/RadarChart';
import PieCharts from '../../components/PieChart';
import Card from '../../components/Card';
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
					console.log('main: ',mainDataResponse)
					console.log('activity: ',activityDataResponse)
					console.log('session: ',averageSessionDataResponse)
					console.log('performance; ',performanceDataResponse)
					throw new Error('Les données reçues sont invalides ou vides.')
				}
				setUserData({
					main: mainDataResponse,
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

		const firstName = userData?.main?.userInfos?.firstName
		const averageSessions = userData?.sessions?.sessions
		const dailyActivity = userData?.activity?.sessions
		const performance = userData?.performance?.data
		const userCount = userData?.main?.keyData;
		const userScore = userData?.main?.score || userData?.main?.todayScore;

	return (
		<>{ !userData && (<div>Loading</div>)}
		<div className='profil'>
			<h1>Bonjour <span>{firstName}</span></h1>
			<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			<div className='graphWrapper'>
				<div className='graph'>
					<div className='container default'>
						<div className='graphHeader'>
							<h2>Activité quotidienne</h2>
							<p className='legend'><span>&#x2022;</span>Poids (kg) <span>&#x2022;</span>Calories brûlées (kCal)</p>
						</div>
						<BarCharts data={dailyActivity} />
					</div>
					<div className='row'>
						<div className='container second'>
							<LineCharts data={averageSessions} />
						</div>
						<div className='container third'>
							<RadarCharts data={performance} />
						</div>
						<div className='container default'>
							<PieCharts data={userScore} />
						</div>
					</div>
				</div>
				<section className='recap'> {/* Cards are article HTML tag */}
					<Card value={userCount?.calorieCount} icon={Calories} name="Calories" unit="kCal" />
					<Card value={userCount?.proteinCount} icon={Proteines} name="Proteines" unit="g" />
					<Card value={userCount?.carbohydrateCount} icon={Glucides} name="Glucides" unit="g" />
					<Card value={userCount?.lipidCount} icon={Lipides} name="Lipides" unit="g" />
				</section>
			</div>
		</div>
		</>
	)
}
export default Dashboard