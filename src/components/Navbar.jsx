import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-10 flex justify-center items-center rounded-lg shadow-md font-bold'>
            <p className=' blue-gradient_text'>TK</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
              About
            </NavLink>
        </nav>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/projects' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
              Projects
            </NavLink>
        </nav>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
              Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar