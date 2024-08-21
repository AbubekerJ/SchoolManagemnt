import Image from 'next/image'
import React from 'react'

const Cards = ({type}) => {
  return (
    <div>

      <div className=' rounded-lg w-40 h-40 bg-yellow-200 p-3'>
          <div className='flex  justify-between'>
          <div >
            <span className='bg-white ' >2024/14</span>
            </div>
         <div>
         <Image src={'/more.png'}
        width={14}
        height={14}/>
         </div>
          </div>
          <div className='py-5 flex flex-col gap-5'>
          <span >6453</span>
          <span >{type}</span>
          </div>
          
      </div>
     
    </div>
  )
}

export default Cards
