import React from 'react'
import headphone from '../../assets/images/headphone.png';
import { useNavigate } from "react-router-dom";
const Banner = () => {
  let navigate = useNavigate();
  return (
    <div className='w-5/6 mx-auto flex justify-center items-center flex-col-reverse lg:flex-row'>
        <div className='flex justify-center'>
           <div className='text-center text-gray-600'>
           <h1 className=' font-bold lg:text-8xl md:text-6xl text-3xl '>BEATS SOLO 3</h1>
            <h1 className='text-teal-600 font-bold lg:text-8xl md:text-6xl text-3xl'>WIRELESS</h1>
            <p className=' pt-5 text-justify text-md font-bold'>Beats Solo3 Wireless on-ear headphones immerse you in rich, award-winning sound, everywhere you want to go,Designed for listening freedom,Up to 40 hours of listening time,Power up with Fast Fuel, Take calls and take control.</p>
            <div className='flex justify-center my-5'>     
            <button className='hover:bg-teal-600 bg-gray-600 text-white font-bold py-3 px-10 rounded-full shadow-sm transition ease-in-out duration-300' onClick={()=>navigate('/about')}>Full Spec</button> 
        </div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <img className='w-1/2' src={headphone} alt="" />
        </div>
    </div>
  )
}

export default Banner