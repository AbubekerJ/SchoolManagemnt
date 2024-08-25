import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between items-center mt-4'>
       <button  className='py-2 px-3 bg-abukiPurple  text-gray- text-sm rounded-md disabled:opacity-50 '>Prev</button>
       <div className='flex items-center justify-cente text-sm gap-1'>
        <button className='p-2 bg-abukiSky rounded-md'>1</button>
        <button className='p-2  rounded-md'>2</button>
        <button className='p-2  rounded-md'>3</button>
        ....
        <button className='p-2  rounded-md'>4</button>
       </div>
       <button  className='py-2 px-3 bg-abukiPurple  text-gray- text-sm rounded-md disabled:opacity-50 '>Next</button>
       

    </div>
  )
}

export default Pagination
