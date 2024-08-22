import Announcement from '@/components/Announcement'
import AttendanceChart from '@/components/AttendanceChart'
import Calander from '@/components/Calander'
import Cards from '@/components/Cards'
import CountChart from '@/components/CountChart'
import FinanceChart from '@/components/FinanceChart'

import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col p-2 md:flex-row  '>
        {/* LEFT */}
        <div className='md:w-2/3 '>
          {/* CARDS */}
        <div className='flex  justify-between flex-wrap gap-4'>
        <Cards type="student"/>
        <Cards type="admin"/>
        <Cards type="teacher"/>
        <Cards type="parent"/>
        </div>
      {/* MIDDLE CHART */}
      <div  className=' flex flex-col lg:flex-row  gap-6 py-4 '>
        {/* COUNT CHART */}
      <div className=' w-full lg:w-1/3 h-[450px]'>
          <CountChart/>
      </div>
      {/* ATTENDABCE CHART */}
      <div className='w-full lg:w-2/3 h-[450px]'>
        <AttendanceChart/>
      </div>
      </div>
      
      {/* BUTTOM CHART */}
      <div className='w-full h-[500px]'>
        <FinanceChart/>
      </div>
       
        
        </div>
        {/* RIGHT */}
        <div className='md:w-1/3 flex flex-col gap-3  '>
        <div className='w-full  px-3'>
        <Calander/>
        </div>
        <div className=' bg-white mx-3 rounded-3xl p-4 '>
       <Announcement/>
        </div>
           
        </div>
    </div>
  )
}

export default page
