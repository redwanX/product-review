import React from 'react'
import {   ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer } from 'recharts';
import useCharts from '../../hooks/useChart';
const MyComposedChart = () => {
    const [ChartsData,setChartsData]  = useCharts();
  return (
    <ResponsiveContainer>
      <ComposedChart  
          data={ChartsData.length?ChartsData:[]}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
  </ResponsiveContainer>
  )
}

export default MyComposedChart