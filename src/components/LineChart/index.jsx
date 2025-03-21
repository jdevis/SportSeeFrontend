import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../LineChart/_linechart.scss'

const CustomTooltip = ({ active, payload }) => {
	if (active && payload)
		return <div className="custom-tooltip-line">
			<p>{payload[0].value} min</p>
		</div>;
	return null;
};

const overlayLegend = (e) =>{
	const overlay = document.querySelector('.overlay')
	console.log('event: ',e)
	console.log('overlay: ',overlay.clientWidth)
	if(e.isTooltipActive){
		let mouseX = (e.activeCoordinate.x / overlay.clientWidth)*100
		console.log('mouseX: ',mouseX)
		overlay.style.background = `linear-gradient(to right, rgb(230,0,0) ${mouseX}%, rgba(0,0,0,0.1) ${mouseX}%`;
	}else{
		overlay.style.background = 'transparent'
	}
}

const LineCharts = ({ data }) => {
	return (
		<ResponsiveContainer className='linechartContainer' >
			<div className='overlay'></div>
			<LineChart data={data} onMouseMove={(e)=>overlayLegend(e)}>
				<text
					x={20}
					y={20}
					fill="#ffffff"
					opacity={0.5}
					fontWeight={500}
					textAnchor="left"
					dominantBaseline="central"
				>
					<tspan x={30} y={40} fontSize="15">
						Durée moyenne des
					</tspan>
					<tspan x={30} y={65} fontSize="15">
						sessions
					</tspan>
				</text>
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
					}}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}
export default LineCharts