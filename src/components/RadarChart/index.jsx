import { RadarChart, Radar, PolarAngleAxis, PolarGrid} from 'recharts';

const RadarCharts = ({ data }) => {
    return (
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar dataKey="value" fill="#e60000" fillOpacity={0.7} />
        </RadarChart>
    )
}
export default RadarCharts