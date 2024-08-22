'use client'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image';


const events=[{
    id:1,
    title:'first event',
    time:'10-12',
    dec:'leaorm epsum this is the frst event'
},
{
    id:2,
    title:'second event',
    time:'10-12',
    dec:'leaorm epsum this is the frst event'
},{
    id:3,
    title:'third event',
    time:'10-12',
    dec:'leaorm epsum this is the frst event'
}

]

const Calander = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className='bg-white  w-full h-full p-4 rounded-3xl'>
    <Calendar onChange={onChange} value={value} />
    <div className='flex flex-col gap-2 py-3 '>
        <div className='flex justify-between items-center pb-3'>
            <h1>Event</h1>
            <Image
            src={'/moreDark.png'}
            width={20}
            height={20}/>
        </div>
        {events.map((event)=>(
         <div className=' flex flex-col   rounded-md  border-2 border-t-4 border-gray-100  odd:border-t-abukiSky even:border-t-abukiPurple' key={event.id}>
             <div className='flex justify-between p-4'  >
                <h1 className='text-gray-600 text-sm'>{event.title}</h1>
                <h1 className='text-gray-400 text-xs'>{event.time}</h1> 
             </div>
             <h1 className='px-4'>{event.dec}</h1>
         </div>
        ))}

    </div>
  </div>
  )
}

export default Calander
