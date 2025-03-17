import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from 'recharts';

const BarCharts = ({data}) =>{

    return (
        <ResponsiveContainer  height={250}>
            <BarChart data={data} barGap={8} >
                <CartesianGrid strokeDasharray="3 3"vertical={false} />
                <XAxis dataKey="day" tickFormatter={(day) => new Date(day).getDate()} />
                <YAxis orientation='right' />
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="kilogram" fill="#000" name="Poids (kg)" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="calories" fill="#e60000" name="Calories brûlées (kCal)" radius={[4, 4, 0, 0]} barSize={8} />
            </BarChart>
        </ResponsiveContainer>
    )
}
export default BarCharts