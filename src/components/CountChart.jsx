'use client'

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 103,
    pv: 9800,
    fill: 'white',
  },
  {
    name: 'MALE',
    count: 53,
    pv: 2400,
    fill: '#8884d8',
  },
  
  {
    name: 'FEMALE',
    count: 50,
    pv: 9800,
    fill: '#82ca9d',
  },
 

];







const CountChart = () => {
  return (
    <div className='bg-white rounded-3xl w-full h-full'>
      <div className='flex justify-between items-center p-4'>
        <h1>students</h1> 
        <Image
        src={'/moreDark.png'}
        width={20}
        height={20}/>
      </div>
      <div className='w-full h-[70%] relative'>
      <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={30} data={data}>
          <RadialBar
          
           
            background
           
            dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      
        <Image
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        src={'/malefemale.png'}
        width={50}
        height={50}/>
     
    </div>

    {/* buttom elements */}
    <div className='flex   justify-center gap-16'>
      <div className=''>
      <div className='bg-abukiSky rounded-full w-5 h-5 '/>
      <h1  className='py-1'>1235</h1>
       <h1 className='text-xs text-gray-400 '>boys[45%]</h1>
      </div>
      <div>
      <div className='bg-abukiYellow rounded-full w-5 h-5 '/>
      <h1 className='py-1'>1235</h1>
      <h1 className='text-xs text-gray-400'>boys[45%]</h1>
      </div>
    </div>
    
    </div>
    
  )
}

export default CountChart
