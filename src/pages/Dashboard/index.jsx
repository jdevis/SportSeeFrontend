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
	const performanceFalse = [
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
			<div className='graphWrapper'>
				<div className='graph'>
					<BarCharts data={activityFalse} />
					<div className='row'>
						<LineCharts data={averageFalse} />
						<RadarCharts data={performanceFalse} />
						<PieCharts data={score} />
					</div>
				</div>
				<section className='recap'> {/* Card are article HTML tag */}
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