import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <header className='bg-customblue sm:hidden'> 
        <nav className='flex flex-row justify-between px-5 py-2'>
            <h1 className='text-white uppercase tracking-widest font-bold'>cryptohub</h1>

            <button className='text-white'>
                <i><GiHamburgerMenu/></i>
            </button>
        </nav>
    </header>
  )
}

export default Navbar