import React from 'react'
import MenuBar from './MenuBar'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav className='flex justify-evenly items-center pt-7'>
        <Link to='/home'>
        <a href="" className='text-[26px] font-medium pointer'>Swift<span className='text-[#5426fa]'>Ride.</span></a>
        </Link>
        <MenuBar/>
        <button className='bg-[#5426fa] py-1 px-2 text-[14px] md:px-5 md:py-2 rounded-3xl md:font-medium cursor-pointer'>get the app</button>
      </nav>


    </div>
  )
}

export default Navigation