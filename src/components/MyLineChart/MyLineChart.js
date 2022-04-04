import React from 'react'
import useChart from '../../hooks/useChart'
import {LineChart,Line,CartesianGrid,Tooltip,XAxis,YAxis,Legend, ResponsiveContainer} from 'recharts'
const MyLineChart = () => {
    const [ChartsData,setChartsData]  = useChart();
  return (
  <ResponsiveContainer>
    <LineChart 
    data={ChartsData.length?ChartsData:[]}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        </LineChart>
  </ResponsiveContainer>
      )
}

export default MyLineChart