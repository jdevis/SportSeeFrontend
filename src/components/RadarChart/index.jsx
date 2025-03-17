import { RadarChart, Radar, PolarAngleAxis, PolarGrid, ResponsiveContainer} from 'recharts';

const RadarCharts = ({ data }) => {
    return (
        <ResponsiveContainer height={250}>
            <RadarChart outerRadius={90} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar dataKey="value" fill="#e60000" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default RadarCharts