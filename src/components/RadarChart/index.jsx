import { RadarChart, Radar, PolarAngleAxis, PolarGrid, ResponsiveContainer } from 'recharts';

const RadarCharts = ({ data }) => {
    return (
        <ResponsiveContainer height={250}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data} margin={{ right: 20 }} startAngle={30} endAngle={-330}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    axisLine={false}
                    dataKey="kind"
                    tickLine={false}
                    tick={{
                        dy: 4,
                        fill: '#fff',
                        fontSize: 12,
                    }}
                />
                <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default RadarCharts