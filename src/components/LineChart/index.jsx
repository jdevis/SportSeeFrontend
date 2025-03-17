import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineCharts = ({ data }) => {
    return (
        <ResponsiveContainer height={250}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" name="Durée moyenne des sessions" />
            </LineChart>
        </ResponsiveContainer>
    )
}
export default LineCharts