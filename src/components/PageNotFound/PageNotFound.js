import React from 'react'
import notFound from '../../assets/images/404.png'
const PageNotFound = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
            <img  className='w-1/2' src={notFound} alt="" />
            <h3 className='py-5 font-bold text-2xl text-blue-600'>Sorry! Page Not Found</h3>
    </div>
  )
}

export default PageNotFound