import { Pie, PieChart, Cell } from 'recharts';

const PieCharts = ({ data }) => {
	const percentage = data * 100;
	const score = [
		{ value: percentage },
		{ value: 100 - percentage }
	];
	const fullScore = [{ value: 100 }]; // ref to 100%
	return (
		<PieChart width={730} height={250}>
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
		</PieChart>
	)
}
export default PieCharts