import React from 'react'
import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <>
    <ul className='hidden gap-6 md:flex'>
      <Link to='/about'>
            <li className='cursor-pointer text-[#8F8F8F] text-[15px] hover:text-[#c4c4c4] hover:transition hover:duration-400 hover:ease-in-out'>About us</li>
      </Link>
      <Link to='/benefits'>
        <li className='cursor-pointer text-[#8F8F8F] text-[15px] hover:text-[#c4c4c4] hover:transition hover:duration-400 hover:ease-in-out'>Benefits</li>
      </Link>
      <Link to='/help'>
        <li className='cursor-pointer text-[#8F8F8F] text-[15px] hover:text-[#c4c4c4] hover:transition hover:duration-400 hover:ease-in-out'>How It Helps</li>
      </Link>
    </ul>

    </>
  )
}

export default MenuBar