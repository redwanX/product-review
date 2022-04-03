import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='flex justify-center py-5 text-blue-600'>
      <div className=' lg:w-2/5 w-full flex justify-between flex-col lg:flex-row  text-center font-bold'>
      <Link className='hover:text-gray-800 transition ease-in' to='/'>HOME</Link>
      <Link className='hover:text-gray-800 transition ease-in' to='/reviews'>REVIEWS</Link>
      <Link className='hover:text-gray-800 transition ease-in' to='/dashboard'>DASHBOARD</Link>
      <Link className='hover:text-gray-800 transition ease-in' to='/blogs'>BLOGS</Link>
      <Link className='hover:text-gray-800 transition ease-in' to='/about'>ABOUT</Link>
      </div>
    </nav>
  )
}

export default Header