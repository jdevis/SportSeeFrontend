import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const LineCharts = ({ data}) => {
    return (
        <LineChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" name="Durée moyenne des sessions" />
        </LineChart>
    )
}
export default LineCharts