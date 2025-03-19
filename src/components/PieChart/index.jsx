import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';

const PieCharts = ({ data }) => {
	const percentage = data * 100;
	const score = [
		{ value: percentage },
		{ value: 100 - percentage }
	];
	const fullScore = [{ value: 100 }]; // ref to 100%
	return (
		<ResponsiveContainer height={250}>
			<PieChart>
				<text x={10} y={10} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
					<tspan fontSize="15" fontWeight="bold" >Score</tspan>
				</text>
				<circle cx="50%" cy="50%" r="90" fill="#fff" />
				<Pie
					data={fullScore}
					dataKey='value'
					cx="50%"
					cy="50%"
					startAngle={180}
					endAngle={-180}
					innerRadius="80%"
					outerRadius="90%"
					fill="#f3f4f6"
				/>
				<Pie
					data={score}
					dataKey='value'
					cx="50%"
					cy="50%"
					startAngle={180}
					endAngle={-180}
					innerRadius="80%"
					outerRadius="90%"
					cornerRadius="5%"
				>
					<Cell fill="#e60000" />
					<Cell fill="transparent" />
				</Pie>
				<text x={"50%"} y={"50%"} fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
					<tspan x={"50%"} y={"45%"} fontSize="26">{percentage}%</tspan>
					<tspan x={"50%"} y={"54%"} fontSize="16" fill='#74798C'>de votre</tspan>
					<tspan x={"50%"} y={"62%"} fontSize="16" fill='#74798C'>objectif</tspan>
				</text>
			</PieChart>
		</ResponsiveContainer>
	)
}
export default PieCharts