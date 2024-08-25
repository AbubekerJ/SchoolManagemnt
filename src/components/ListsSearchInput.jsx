import Image from 'next/image'
import React from 'react'

const ListsSearchInput = () => {
  return (
    <div className='flex items-center p-2  gap-2 ring-2 border-gray-200 rounded-3xl w-full md:w-auto bf '>
        <Image src={'/search.png'} width={14} height={14}/>
          <input className='border-transparent outline-none ' type="text" placeholder='seache...' />
      </div>
  )
}

export default ListsSearchInput
