/* Retrieving Datas **/
import { formatMainData, formatActivityData, formatPerformanceData, formatSessionData } from '../../services/models';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../Error';
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
import '../Dashboard/_dashboard.scss'


const Dashboard = () => {

	const { id } = useParams()
	const intId = parseInt(id)

	const [userData, setUserData] = useState({
		main: null,
		activity: null,
		sessions: null,
		performance: null,
	})
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const [
					mainDataResponse,
					activityDataResponse,
					averageSessionDataResponse,
					performanceDataResponse,
				] = await Promise.all([
					formatMainData(intId),
					formatActivityData(intId),
					formatSessionData(intId),
					formatPerformanceData(intId),
				])
				setUserData({
					main: mainDataResponse,
					activity: activityDataResponse,
					sessions: averageSessionDataResponse,
					performance: performanceDataResponse
				})

			} catch (error) {
				setError(error)
				console.error('Erreur lors du chargement des données :', error)
				if (error.response) {
					console.error("Détails de l'erreur API :", error.response.data)
				}
			} finally {
				setLoading(false)
			}
		}
		getData()
	}, [intId])

	if (loading) return <p>Chargement des données...</p>;
	if (error) return <Error />;
	return (
		<div className='profil'>
			<h1>Bonjour <span>{userData?.main?.firstName}</span></h1>
			<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			<div className='graphWrapper'>
				<div className='graph'>
					<div className='container default'>
						<div className='graphHeader'>
							<h2>Activité quotidienne</h2>
							<p className='legend'><span>&#x2022;</span>Poids (kg) <span>&#x2022;</span>Calories brûlées (kCal)</p>
						</div>
						<BarCharts data={userData?.activity} />
					</div>
					<div className='row'>
						<div className='container second'>
							<LineCharts data={userData?.sessions} />
						</div>
						<div className='container third'>
							<RadarCharts data={userData?.performance} />
						</div>
						<div className='container default'>
							<PieCharts data={userData?.main?.score} />
						</div>
					</div>
				</div>
				<section className='recap'> {/* Cards are article HTML tag */}
					<Card value={userData?.main?.calories} icon={Calories} name="Calories" unit="kCal" />
					<Card value={userData?.main?.proteines} icon={Proteines} name="Proteines" unit="g" />
					<Card value={userData?.main?.glucides} icon={Glucides} name="Glucides" unit="g" />
					<Card value={userData?.main?.lipides} icon={Lipides} name="Lipides" unit="g" />
				</section>
			</div>
		</div>
	)
}
export default Dashboard