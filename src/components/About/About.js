import React from 'react'
import headphone from '../../assets/images/headphone.png'
const About = () => {
  return (
   <div className='w-5/6 mx-auto '>
     <div className='w-full flex justify-center'>
          <img className='w-1/4' src={headphone} alt="" />
        </div>
      <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 h-full'>
      <div className=' shadow-lg p-5 rounded'>
        <h1 className=' text-teal-600 text-2xl font-bold '>Designed for listening freedom</h1>
        <p className=' text-gray-600 '>A sleek, streamlined, and foldable design, plus seamless setup via the Apple W1 chip, means these are durable and portable enough to stay on-the-move with you.</p>
      </div>
      <div className=' shadow-lg p-5 rounded'>
        <h1 className=' text-teal-600 text-2xl font-bold '>Up to 40 hours of listening time</h1>
        <p className=' text-gray-600 '>With this much battery life, it’s the perfect everyday headphone, and on-ear cushion cups are made for hours of wear.</p>
      </div>
      <div className=' shadow-lg p-5 rounded'>
        <h1 className=' text-teal-600 text-2xl font-bold '>Power up with Fast Fuel</h1>
        <p className=' text-gray-600 '>To get you back on track, use 5-minute Fast Fuel for 3 hours of playback when battery is low.</p>
      </div>
      <div className='shadow-lg p-5 rounded'> 
        <h1 className=' text-teal-600 text-2xl font-bold '>Take calls and take control</h1>
        <p className=' text-gray-600 '>On-ear controls with dual beam-forming mics allow you to take calls, play music, adjust volume, and voice activate wherever your day takes you.</p>
      </div>
      
    </div>
    <div>
    <h1 className=' text-center py-5 text-teal-600 text-2xl font-bold '>Key Features</h1>
    <ul className=' mb-5 list-decimal text-gray-600 font-bold shadow-lg rounded p-10 grid lg:grid-cols-2 '>
      <li>Bluetooth Wireless Pairing</li>
      <li>Apple W1 Chip for Quick Pairing</li>
      <li>Simultaneous Pairing with iOS Devices</li>
      <li>Clear, Balanced Sound & Noise Isolation</li>
      <li>On-Board Music, Call & Siri Control</li>
      <li>Built-In Rechargeable Battery</li>
      <li>40-Hour Battery Life</li>
      <li>5-Minute Charge for 3 Hours of Play</li>
    </ul>
    </div>
   </div>
  )
}

export default About