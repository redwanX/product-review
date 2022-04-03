import React from 'react'

const Review = (props) => {
    const {name,rating,img,review} = props.review;
    return (
    
          <div className='flex h-full shadow-lg px-5 py-5 flex-col lg:flex-row items-center justify-center'>
            <div className='lg:w-1/2 w-full flex flex-col items-center'>
            <img className='rounded-full' src={img} alt="" />
            <h3 className='text-2xl font-bold'>{name}</h3>
            <h4 className='text-xl font-bold text-blue-600'>Rating: {rating}/5</h4>
            </div>
            <div className='lg:w-1/2 w-full flex items-center'>
            <h2 className=' italic '>{`"${review}"`}</h2>
            </div>
          </div>
  )
}

export default Review