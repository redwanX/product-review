import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

const Review = (props) => {
    const {name,rating,img,review} = props.review;
    return (
    
          <div className='text-gray-600 flex h-full shadow-lg px-5 py-5 flex-col lg:flex-row items-center justify-center'>
            <div className='lg:w-1/2 w-full flex flex-col items-center'>
            <img className='rounded-full' src={img} alt="" />
            <h3 className='text-2xl font-bold'>{name}</h3>
            <div className='flex justify-center items-center bg-teal-600 rounded-full px-6 py-1'>
            <h4 className='text-xl font-bold text-white '>{rating} </h4>
            <h4 className=' h-6 w-6 text-white'><StarIcon></StarIcon></h4>
            </div>
            </div>
            <div className='lg:w-1/2 w-full flex items-center'>
            <h2 className=' italic '>{`"${review}"`}</h2>
            </div>
          </div>
  )
}

export default Review