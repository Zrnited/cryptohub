import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  return (
    <div className='w-full h-full bg-gray-100'>
        <Navbar />
        <article className='flex flex-row gap-3 w-full h-full'>
            <Sidebar />
            <div className='flex flex-col justify-between w-full'>
                <Section />
                <Footer />
            </div>
        </article>
    </div>
  )
}

export default Homepage