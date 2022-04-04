import React from 'react'
import  CustomLink  from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <nav className='flex justify-center shadow-md py-5 mb-5 text-teal-600'>
      <div className=' lg:w-2/5 w-full flex justify-between flex-col lg:flex-row  text-center font-bold'>
      <CustomLink className=' hover:text-gray-600 transition ease-in duration-300' to='/'>HOME</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/reviews'>REVIEWS</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/dashboard'>DASHBOARD</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/blogs'>BLOGS</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/about'>ABOUT</CustomLink>
      </div>
    </nav>
  )
}

export default Header