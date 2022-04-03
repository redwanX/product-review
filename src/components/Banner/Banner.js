import React from 'react'
import headphone from '../../assets/images/headphone.png';
const Banner = () => {
  return (
    <div className='justify-center items-center lg:flex'>
        <div className='w-full flex justify-center'>
           <div className='w-4/5 text-center'>
           <h1 className='text-gray-800 font-bold lg:text-8xl md:text-6xl text-3xl '>BEATS SOLO 3</h1>
            <h1 className='text-blue-600 font-bold lg:text-8xl md:text-6xl text-3xl'>WIRELESS</h1>
            <p className=' pt-5 text-justify text-md font-bold'>Beats Solo3 Wireless on-ear headphones immerse you in rich, award-winning sound, everywhere you want to go,Designed for listening freedom,Up to 40 hours of listening time,Power up with Fast Fuel, Take calls and take control.</p>
           </div>
        </div>
        <div className='w-full flex justify-center'>
          <img className='w-1/2' src={headphone} alt="" />
        </div>
    </div>
  )
}

export default Banner