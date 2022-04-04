import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useCharts from '../../hooks/useChart';
const MyBarChart = () => {
    const [ChartsData,setChartsData]  = useCharts();
  return (
    <ResponsiveContainer>
     <BarChart
         data={ChartsData.length?ChartsData:[]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          <Bar dataKey="sell" fill="#ffc658" />
        </BarChart>
  </ResponsiveContainer>
  )
}

export default MyBarChart