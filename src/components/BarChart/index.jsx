import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from 'recharts';
import '../BarChart/_barchart.scss'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip-bar">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }

  return null;
};

const BarCharts = ({data}) =>{
    return (
        <ResponsiveContainer  height={250}>
            <BarChart
                margin={{
                    top: 10,
                    right: 40,
                    left: 40,
                    bottom: 10,
                }} data={data} barGap={8} >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" axisLine={true} tickLine={false} tick={{ fontSize: '14px', fontWeight: '500' }} dy={15} tickFormatter={(day) => new Date(day).getDate()} />
                <YAxis yAxisId="left" orientation="left" hide={true} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickMargin={30} type="number" tick={{ color: '9B9EAC', fontSize: '14px', fontWeight: '500' }} domain={["dataMin - 1", "dataMax + 2"]} />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="right" dataKey="kilogram" fill="#000" name="Poids (kg)" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar yAxisId="left" dataKey="calories" fill="#e60000" name="Calories brûlées (kCal)" radius={[4, 4, 0, 0]} barSize={8} />
            </BarChart>
        </ResponsiveContainer>
    )
}
export default BarCharts