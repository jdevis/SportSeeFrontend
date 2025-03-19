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

	const averageFalse = [
		{
			day: "L",
			sessionLength: 30
		},
		{
			day: "M",
			sessionLength: 23
		},
		{
			day: "M",
			sessionLength: 45
		},
		{
			day: "J",
			sessionLength: 50
		},
		{
			day: "V",
			sessionLength: 0
		},
		{
			day: "S",
			sessionLength: 0
		},
		{
			day: "D",
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
	const performanceFalse = [
		{
			value: 80,
			kind: "Cardio"
		},
		{
			value: 120,
			kind: "Energie"
		},
		{
			value: 140,
			kind: "Endurance"
		},
		{
			value: 50,
			kind: "Force"
		},
		{
			value: 200,
			kind: "Vitesse"
		},
		{
			value: 90,
			kind: "Intensité"
		}
	]
	const score = 0.12
	return (
		<div className='profil'>
			<h1>Bonjour <span>Toto</span></h1>
			<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			<div className='graphWrapper'>
				<div className='graph'>
					<div className='container default'>
						<div className='graphHeader'>
							<h2>Activité quotidienne</h2>
							<p className='legend'><span>&#x2022;</span>Poids (kg) <span>&#x2022;</span>Calories brûlées (kCal)</p>
						</div>
						<BarCharts data={activityFalse} />
					</div>
					<div className='row'>
						<div className='container second'>
							<LineCharts data={averageFalse} />
						</div>
						<div className='container third'>
							<RadarCharts data={performanceFalse} />
						</div>
						<div className='container default'>
							<PieCharts data={score} />
						</div>
					</div>
				</div>
				<section className='recap'> {/* Cards are article HTML tag */}
					<Card value='1.930' icon={Calories} name="Calories" unit="kCal" />
					<Card value='155' icon={Proteines} name="Proteines" unit="g" />
					<Card value='290' icon={Glucides} name="Glucides" unit="g" />
					<Card value='50' icon={Lipides} name="Lipides" unit="g" />
				</section>
			</div>
		</div>
	)
}
export default Dashboard