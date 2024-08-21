import Cards from '@/components/Cards'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col p-2 md:flex-row  '>
        {/* LEFT */}
        <div className='md:w-2/3 bg-red-300'>
          {/* CARDS */}
        <div className='flex  justify-between flex-wrap gap-4'>
        <Cards type="student"/>
        <Cards type="admin"/>
        <Cards type="teacher"/>
        <Cards type="parent"/>
        </div>
        
        </div>
        {/* RIGHT */}
        <div className='md:w-1/3 bg-green-200'>
       
        </div>
    </div>
  )
}

export default page
