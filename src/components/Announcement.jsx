import React from 'react'

const Announcement = () => {
  return (
    <div className='flex flex-col gap-3 '>
        <div className='flex justify-between items-center '>
    <h1 className='text-sm text-gray-500 font-bold'>Announcement</h1>
    <span className='text-gray-400 text-[10px]'>view all</span>
     </div>
      <div className='flex flex-col bg-purple-100 p-4 rounded-md gap-3'>
        <div className='flex justify-between '>
          <h1 className='text-gray-600 text-sm font-bold'>Annoucement title</h1>  
          <h1 className='bg-white px-1 py-1 rounded-md text-xs'>2023/12</h1>  
        </div>
        <h1 className='text-sm text-gray-400'>the is aanoucement descrptoion </h1>
      </div>
      <div className='flex flex-col bg-green-100 p-4 rounded-md gap-3'>
        <div className='flex justify-between '>
          <h1 className='text-gray-600 text-sm font-bold'>Annoucement title</h1>  
          <h1 className='bg-white px-1 py-1 rounded-md text-xs'>2023/12</h1>  
        </div>
        <h1 className='text-sm text-gray-400'>the is aanoucement descrptoion </h1>
      </div>
      <div className='flex flex-col bg-blue-100 p-4 rounded-md gap-3'>
        <div className='flex justify-between '>
          <h1 className='text-gray-600 text-sm font-bold'>Annoucement title</h1>  
          <h1 className='bg-white px-1 py-1 rounded-md text-xs'>2023/12</h1>  
        </div>
        <h1 className='text-sm text-gray-400'>the is aanoucement descrptoion </h1>
      </div>
    </div>
    
  )
}

export default Announcement
