import React from 'react'
import MyAreaChart from '../MyAreaChart/MyAreaChart'
import MyBarChart from '../MyBarChart/MyBarChart'
import MyComposedChart from '../MyComposedChart/MyComposedChart'
import MyLineChart from '../MyLineChart/MyLineChart'
const Dashboard = () => {
  return (
    <div className='flex justify-center'>
      <div className='py-5 grid gap-8 lg:grid-cols-2 grud-cols-1 lg:w-5/6 w-full'>
        <div className='h-80 w-5/6 mx-auto'>
          <h3 className='text-blue-600 text-xl text-center font-bold'>Month Wise Sell</h3>
           <MyLineChart></MyLineChart>
        </div>
        <div className='h-80 w-5/6 mx-auto'>
        <h3 className='text-blue-600 text-xl text-center font-bold'>Investment vs Revenue</h3>
           <MyAreaChart></MyAreaChart>
        </div>
        <div className='h-80 w-5/6 mx-auto'>
        <h3 className='text-blue-600 text-xl text-center font-bold'>Investment vs Revenue vs Sell</h3>
           <MyBarChart></MyBarChart>
        </div>
        <div className='h-80 w-5/6 mx-auto'>
        <h3 className='text-blue-600 text-xl text-center font-bold'>Investment vs Revenue vs Sell</h3>
           <MyComposedChart></MyComposedChart>
        </div>
    </div>
    </div>
  )
}

export default Dashboard