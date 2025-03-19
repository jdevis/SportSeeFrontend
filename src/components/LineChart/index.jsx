import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../LineChart/_linechart.scss'

const CustomTooltip = ({ active, payload }) => {
	if (active && payload)
		return <div className="custom-tooltip-line">
			<p>{payload[0].value} min</p>
		</div>;
	return null;
};

const LineCharts = ({ data }) => {
	return (
		<ResponsiveContainer height={250}>
			<LineChart data={data}>
				<XAxis
					dataKey="day"
					axisLine={false}
					tickLine={false}
					tick={{
						fill: "#fff",
						opacity: ".5",
						fontSize: "small",
					}} />
				<YAxis hide={true} domain={["dataMin - 20", "dataMax + 40"]} />
				<Tooltip content={<CustomTooltip />} />
				<Line
					type="natural"
					dataKey="sessionLength"
					stroke="#FBFBFB"
					dot={false}
					activeDot={{
					stroke: "rgba(255,255,255, 0.3)",
					strokeWidth: 10,
					r: 5,
					}}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}
export default LineCharts