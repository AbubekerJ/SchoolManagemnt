import Image from 'next/image'
import React from 'react'

const Cards = ({type}) => {
  return (

      <div className=' rounded-2xl odd:bg-abukiPurple even:bg-abukiYellow p-3 flex-1 min-w-[130px]'>
         <div className='flex justify-between  items-center'>
            <span className='bg-white px-2 py-1 rounded-lg text-green-300 '>2024/14</span>
            <Image
            
            src={'/more.png'}
            alt=''
            width={20}
            height={20}/>
         </div>
          <span className='text-2xl font-semibold my-4 inline-block'>6345</span>
          <h3 className='capitalize text-sm font-medium text-gray-500'>{type}</h3>
         </div>
     
    
  )
}

export default Cards
