import React, { useState } from 'react'
import  CustomLink  from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Header = () => {
  const [open,setOpen]=useState(false);
  return (
    <div>
      <div onClick={()=>setOpen(!open)} className="lg:hidden h-10 w-10 text-teal-600">
        {open? <XIcon></XIcon>:<MenuIcon></MenuIcon>}
      </div>
      <nav className='flex justify-center shadow-md mb-5 text-teal-600'>
      <div className= {`lg:w-2/5 w-full  lg:flex lg:justify-between lg:flex-row py-5 text-center font-bold ${open?'block':'hidden'}`} >
      <CustomLink className=' hover:text-gray-600 transition ease-in duration-300' to='/'>HOME</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/reviews'>REVIEWS</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/dashboard'>DASHBOARD</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/blogs'>BLOGS</CustomLink>
      <CustomLink className='hover:text-gray-600 transition ease-in duration-300' to='/about'>ABOUT</CustomLink>
      </div>
    </nav>
    </div>
  )
}

export default Header