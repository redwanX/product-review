import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='flex justify-center py-5 text-blue-600'>
      <div className=' lg:w-2/5 w-full flex justify-between flex-col lg:flex-row  text-center font-bold'>
      <Link className='hover:text-gray-600 transition ease-in duration-300' to='/'>HOME</Link>
      <Link className='hover:text-gray-600 transition ease-in duration-300' to='/reviews'>REVIEWS</Link>
      <Link className='hover:text-gray-600 transition ease-in duration-300' to='/dashboard'>DASHBOARD</Link>
      <Link className='hover:text-gray-600 transition ease-in duration-300' to='/blogs'>BLOGS</Link>
      <Link className='hover:text-gray-600 transition ease-in duration-300' to='/about'>ABOUT</Link>
      </div>
    </nav>
  )
}

export default Header