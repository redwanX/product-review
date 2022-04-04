import React from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import useCharts from '../../hooks/useChart';
const MyAreaChart = () => {
    const [ChartsData,setChartsData]  = useCharts();
  return (
    <ResponsiveContainer>
    <AreaChart
      data={ChartsData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>
  </ResponsiveContainer>
  )
}

export default MyAreaChart