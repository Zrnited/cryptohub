import React from 'react'

const CryptoStats = ({ header, detail }) => {
  return (
    <div className='flex flex-col'>
        <h1 className='capitalize tracking-wider font-semibold text-sm'>{header}</h1>
        <p className='text-lg font-bold'>{detail}</p>
    </div>
  )
}

export default CryptoStats