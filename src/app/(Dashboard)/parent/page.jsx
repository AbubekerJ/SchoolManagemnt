import Announcement from '@/components/Announcement'
import BigCalander from '@/components/BigCalander'

import React from 'react'

const page = () => {
  return (
    <div className="  p-4 flex gap-4 flex-col xl:flex-row bg-red-600">

      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
        {/* parent can have many childern */}
          <h1 className="text-xl font-semibold">Schedule(student a) </h1>  
          <BigCalander/>
        </div>
      </div>
       {/* RIGHT */}
       <div className=' w-full md:w-1/3 flex flex-col gap-3  '>
       
        <div className=' bg-white mx-3 rounded-3xl p-4 '>
       <Announcement/>
        </div>
           
        </div>
     
    </div>
  )
}

export default page

