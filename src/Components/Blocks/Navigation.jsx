import React from 'react'
import MenuBar from './MenuBar'

function Navigation() {
  return (
    <div>
      <nav className='flex justify-evenly items-center pt-5'>
        <a href="" className='text-2xl font-medium pointer'>Swift<span className='text-[#5426fa]'>Ride.</span></a>
        <MenuBar/>
        <button>get the app</button>
      </nav>


    </div>
  )
}

export default Navigation