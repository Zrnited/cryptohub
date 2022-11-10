import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsCoin} from 'react-icons/bs'
import { BiMoney } from 'react-icons/bi'
import { BiNews } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <aside className='bg-customblue hidden sm:flex flex-col text-white w-1/2 md:w-1/3'>
        <div className='p-3'>
            <h1 className='uppercase tracking-widest font-bold text-center text-lg'>Cryptohub</h1>
            <div className='h-one w-full bg-white mt-3'></div>
        </div>

        <ul className='flex flex-col gap-2 justify-center w-full px-3 py-3'>
            <li className='flex flex-row gap-2 items-center py-2 px-2 hover:bg-red-600 hover:rounded-lg'>
                <i> <AiFillHome /> </i>
                <Link to={'/'} className='tracking-widest text-sm'>  
                    Home
                </Link>
            </li>
            <li className='flex flex-row gap-2 items-center py-2 px-2 hover:bg-red-600 hover:rounded-lg'>
                <i> <BsCoin /> </i>
                <Link to={'/'} className='tracking-widest text-sm'>  
                    Cryptocurrencies  
                </Link>
            </li>
            <li className='flex flex-row gap-2 items-center py-2 px-2 hover:bg-red-600 hover:rounded-lg'>
                <i> <BiMoney /> </i>
                <Link to={'/'} className='tracking-widest text-sm'>  
                    Exchanges  
                </Link>
            </li>
            <li className='flex flex-row gap-2 items-center py-2 px-2 hover:bg-red-600 hover:rounded-lg'>
                <i> <BiNews /> </i>
                <Link to={'/'} className='tracking-widest text-sm'>  
                    News  
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar